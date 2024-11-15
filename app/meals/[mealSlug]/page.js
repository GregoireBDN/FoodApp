import React from "react";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import { deleteMeal } from "@/lib/meals";
export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealDetailPage = async ({ params }) => {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creatorEmail}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
        {/* <form className={classes.actions} action={deleteMeal}>
          <input type="hidden" name="mealSlug" value={meal.slug} />
          <button type="submit">Delete</button>
        </form> */}
      </main>
    </>
  );
};

export default MealDetailPage;
