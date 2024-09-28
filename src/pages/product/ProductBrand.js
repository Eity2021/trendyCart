import React from "react";
import ProductSize from "./ProductSize";
import FilterColor from "./FilterColor";
export default function ProductBrand() {
  return (
    <div className="">
      <div className="shadow-lg bg-white px-5 my-12 ">
        <div>
          <p className="uppercase  text-medium   font-bold text-header pb-[16px] py-10">
            Product Brand
          </p>
        </div>

        <div className=" flex gap-2 pb-2">
          <input type="radio" />
          <p className="text-medium font-normal text-text-paragraph">
            New Arrivals
          </p>
        </div>
        <div className=" flex gap-2 pb-2">
          <input type="radio" />
          <p className="text-medium font-normal text-text-paragraph">
            Clothing & Accessories
          </p>
        </div>
        <div className=" flex gap-2 pb-2">
          <input type="radio" />
          <p className="text-medium font-normal text-text-paragraph">
            Vanam Jacket
          </p>
        </div>
        <div className=" flex gap-2 pb-2">
          <input type="radio" />
          <p className="text-medium font-normal text-text-paragraph">
            Home Electronics
          </p>
        </div>
        <ProductSize></ProductSize>
        <FilterColor></FilterColor>
      </div>
    </div>
  );
}
