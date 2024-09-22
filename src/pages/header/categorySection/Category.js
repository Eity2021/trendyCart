import React from "react";
import FreeShipping from "./freeShip/FreeShipping";
import SearchBar from "./search/SearchBar";
import CategoryDropDown from "./categoryDropDown/CategoryDropDown";
import MobileCategoryDropdown from "./categoryDropDown/MobileCategoryDropdown";

export default function Category() {
  return (
    <div className="bg-bgAshColor">
      <div className="container ">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-col-1">
          <div>
            <div className="hidden sm:block">
              <CategoryDropDown />
            </div>

            <div className="block sm:hidden">
              <MobileCategoryDropdown />
            </div>
          </div>
          <SearchBar></SearchBar>
          <div className="lg:flex  hidden justify-end">
            <FreeShipping></FreeShipping>
          </div>
        </div>
      </div>
    </div>
  );
}
