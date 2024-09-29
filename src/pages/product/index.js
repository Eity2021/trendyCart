import React from "react";
import { useGetProductsQuery } from "../../features/product/ProductApi";
import ProductCategories from "./ProductCategories";
import AllProduct from "./AllProduct";
import SmartShop from "./SmartShop";
import FilterByPrice from "./FilterByPrice";
import NewProduct from "./NewProduct";
import ProductBrand from "./ProductBrand";
import ProductImage from "./ProductImage";
import Pagination from "./Pagination";

export default function Product() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  return (
    <div className="bg-gray-bg">
      <SmartShop></SmartShop>
      <div className="container">
        {/* {products?.data?.products?.map((product) => (
        <li>id: {product._id}</li>
      ))} */}

        <div className="mt-[70px]  lg:mx-16 md:mx-10 mx-2">
          <div className="grid grid-cols-4  gap-8">
            <div>
              <ProductCategories></ProductCategories>
              <FilterByPrice></FilterByPrice>
              <NewProduct></NewProduct>
              <ProductBrand></ProductBrand>
              <ProductImage></ProductImage>
            </div>
            <div className="col-span-3">
              <AllProduct></AllProduct>
              <Pagination></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
