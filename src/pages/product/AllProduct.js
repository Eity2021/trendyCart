import React from "react";
import AllProductList from "./AllProductList";
import Grid from "../../components/svg/Grid";
import LittleGrid from "../../components/svg/LittleGrid";
import { useGetProductsQuery } from "../../features/product/ProductApi";
export default function AllProduct() {

  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  const allProducts = products?.products;

  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <div>
          <p className="text-medium text-text-paragraph">
            Showing Product 1-12 Of 10 Result
          </p>
        </div>
        <div className=" flex gap-2 ">
          <div className=" flex items-center  justify-center  h-11 w-11  bg-loginColor">
            <Grid></Grid>
          </div>

          <div className=" flex items-center  justify-center  h-11 w-11 border">
            <LittleGrid></LittleGrid>
          </div>

          <div>
            <select class="select select-bordered w-full max-w-xs rounded-[0px]">
              <option disabled selected>
                Default Sorting
              </option>
              <option>Free Shipping</option>
              <option>Best Match</option>
              <option>Newest item</option>
              <option>Size A-Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-6">
        {allProducts?.map((product) => (
          <div key={product._id}>
            <AllProductList product={product}></AllProductList>
          </div>
        ))}
      </div>
    </div>
  );
}
