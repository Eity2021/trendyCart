import React from "react";
import BestCategoriesList from "./BestCategoriesList";

export default function BestCategories() {
  return (
    <div className='mt-"60px'>
      <div className="text-center">
        <p className="text-loginColor  text-sm uppercase">Browser Categories</p>
        <p className="text-4xl font-bold  text-header   uppercase">
          BROWSE best CATEGORIES
        </p>
      </div>
      <BestCategoriesList></BestCategoriesList>
    </div>
  );
}
