import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(mealSlug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealSlug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  await stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      console.error("Error writing image to file:", err);
    }
  });
  meal.image = `/images/${filename}`;
  db.prepare(
    "INSERT INTO meals (title, creator_email, creator, image, summary, instructions, slug) VALUES (@title, @creator_email, @creator, @image, @summary, @instructions, @slug)"
  ).run(meal);
}

export async function deleteMeal(formData) {
  "use server";
  const mealSlug = formData.get("mealSlug");
  db.prepare("DELETE FROM meals WHERE slug = ?").run(mealSlug);
  revalidatePath("/meals");
  redirect("/meals");
}
