import React from "react";
import DealsBanner from "./DealsBanner";
import DealsProducts from "./DealsProducts";

export default function Deals() {
  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-0  ">
        <div className="mb-3  md:max-0   mx-4">
          <DealsBanner></DealsBanner>
        </div >

        <div className="md:col-span-2  md:mx-0 mx-4">
          <DealsProducts></DealsProducts>
        </div>
      </div>
    </div>
  );
}
