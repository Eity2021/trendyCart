import React from "react";
import FreeShipping from "./freeShip/FreeShipping";
import SearchBar from "./search/SearchBar";
import CategoryDropDown from "./categoryDropDown/CategoryDropDown";
import MobileCategoryDropdown from "./categoryDropDown/MobileCategoryDropdown";
import { useGetCategoryQuery } from "../../../features/category/CategoriesApi";

export default function Category() {

  const {data:category, isLoading,isError,error} = useGetCategoryQuery();

  return (
    <div className="bg-bgAshColor">
      <div className="container ">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-col-1">
          <div>
            <div className="hidden sm:block">
              <CategoryDropDown category={category} />
            </div>

            <div className="block sm:hidden">
              <MobileCategoryDropdown  category={category} />
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
