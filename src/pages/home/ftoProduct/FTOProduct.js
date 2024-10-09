import React from "react";
import FTOFeaturedProduct from "./FTOFeaturedProduct";
import FTOTopRatedProduct from "./FTOTopRatedProduct";
import FTOSaleProduct from "./FTOSaleProduct";
export default function FTOProduct() {
  return (
    <div className="mb-16  md:mx-2 mx-4">
      <div className="grid lg:grid-cols-3   md:grid-cols-2 grid-cols-1    gap-8">
        <div>
          <div className="flex justify-between border-b mb-4">
            <p className="text-lg font-bold  text-header pb-2">
              Featured Products
            </p>
            <button className="text-sm text-loginColor">View All</button>
          </div>
          <div>
            <FTOFeaturedProduct></FTOFeaturedProduct>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-b mb-4">
            <p className="text-lg font-bold  text-header  pb-2">
              Top Rated Products
            </p>
            <button className="text-sm text-loginColor">View All</button>
          </div>
          <div>
            <FTOTopRatedProduct></FTOTopRatedProduct>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-b mb-4">
            <p className="text-lg font-bold  text-header    pb-2">
              On Sale Products
            </p>
            <button className="text-sm text-loginColor">View All</button>
          </div>
          <div>
            <FTOSaleProduct></FTOSaleProduct>
          </div>
        </div>
      </div>
    </div>
  );
}
