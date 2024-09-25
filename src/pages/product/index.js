import React from "react";
import { useGetProductsQuery } from "../../features/product/ProductApi";
import ProductCategories from "./ProductCategories";
import AllProduct from "./AllProduct";
import SmartShop from "./SmartShop";

export default function Product() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  return (
    <div className="bg-gray-bg">
      <SmartShop></SmartShop>
      <div className="container">
        {/* {products?.data?.products?.map((product) => (
        <li>id: {product._id}</li>
      ))} */}

        <div className="mt-[70px]">
          <div className="grid grid-cols-5  gap-8">
            <div>
              <ProductCategories></ProductCategories>
            </div>
            <div className="col-span-4">
              <AllProduct></AllProduct>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
