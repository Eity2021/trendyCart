import React from "react";

import CartProduct from "./CartProduct";
import CartCalculation from "./CartCalculation";
export default function CartPageList() {
  return (
    <div className="my-20 2xl:mx-0 mx-6">
      <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4">
        <CartProduct></CartProduct>
        <CartCalculation></CartCalculation>
      </div>
    </div>
  );
}
