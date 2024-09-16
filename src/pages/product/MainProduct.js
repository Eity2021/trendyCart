import React from "react";
import { useGetProductsQuery } from "../../features/product/ProductApi";

export default function MainProduct() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  return (
    <div>
      {products?.data?.products?.map((product) => (
        <li>id: {product._id}</li>
      ))}
    </div>
  );
}
