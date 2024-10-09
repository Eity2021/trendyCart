import React, { useState } from "react";

export default function FilterByPrice() {
  const [value, setValue] = useState(10);
  return (
    <div className="mt-8 ">
      <div className="shadow-lg bg-white px-5 py-12">
        <p className="text-header text-medium font-bold">Filter By Price</p>
        <div className="pt-3">
          <input
            type="range"
            min={0}
            max="100"
            value={value}
            className="range range-primary"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="pt-1 flex gap-2">
          <p className="text-text-paragraph text-sm font-bold uppercase">
            Price :
          </p>
          <p className="text-text-paragraph text-sm font-medium ">
            500 bdt
          </p>
          <p className="text-text-paragraph text-sm font-medium ">-</p>
          <p className="text-text-paragraph text-sm font-medium ">
            10000 bdt
          </p>
        </div>
      </div>
    </div>
  );
}
