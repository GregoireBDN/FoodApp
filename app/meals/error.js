"use client";
import React from "react";

const MealsErrorPage = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </main>
  );
};

export default MealsErrorPage;
