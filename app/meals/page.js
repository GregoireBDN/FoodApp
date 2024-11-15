import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/componentes/meals/meals-grid";
import MealsLoadingPage from "./loading-out";
import { Suspense } from "react";

export const metadata = {
  title: "Explore Meals",
  description: "Explore delicious meals shared by our community.",
};
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself! It&apos;s easy and
          fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
