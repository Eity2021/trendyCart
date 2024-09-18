import React from "react";
import SellingProductsImages from "./SellingProductsImages";

export default function SellingProducts() {
  return (
    <div className="my-[60px] ">
      <div className="text-center">
        <p className="text-loginColor text-sm uppercase">exclusive collection</p>
        <p className="text-4xl font-bold  text-header   uppercase">
          best selling products
        </p>
      </div>
      <div>
        <SellingProductsImages></SellingProductsImages>
      </div>
    </div>
  );
}
