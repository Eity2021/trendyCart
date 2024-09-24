import React from "react";
import BestCategoriesList from "./BestCategoriesList";

export default function BestCategories() {
  return (
    <div className="mt-14 border-b mb-16">
      <div className="text-center">
        <p className="text-loginColor  text-sm uppercase font-bold">Browser Categories</p>
        <h2 className="text-4xl font-bold  text-header   uppercase pt-4">
          BROWSE Best CATEGORIES
        </h2>
      </div>
      <BestCategoriesList></BestCategoriesList>
    </div>
  );
}
