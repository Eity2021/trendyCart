import React from "react";
import DealsBanner from "./DealsBanner";
import DealsProducts from "./DealsProducts";

export default function Deals() {
  return (
    <div >
      <div className="grid grid-cols-3 gap-4">
        <div>
          <DealsBanner></DealsBanner>
        </div>

        <div className="col-span-2">
          <DealsProducts></DealsProducts>
        </div>
      </div>
    </div>
  );
}
