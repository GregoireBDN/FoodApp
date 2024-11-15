"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export async function shareMeal(prevState, formData) {
  function InvalidTextInput(text) {
    return !text || text.trim().length < 3;
  }
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    InvalidTextInput(meal.title) ||
    InvalidTextInput(meal.summary) ||
    InvalidTextInput(meal.instructions) ||
    InvalidTextInput(meal.creator) ||
    InvalidTextInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return { error: "Invalid input" };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
