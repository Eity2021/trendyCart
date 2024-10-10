import React from "react";
import AllProductList from "./AllProductList";
import Grid from "../../components/svg/Grid";
import LittleGrid from "../../components/svg/LittleGrid";
import bestSell from "../../assets/images/home/bestSell.jpg";
import featuredSale from "../../assets/images/home/featuredSale.png";
import watchDeals from "../../assets/images/home/watchDeals.jpg";
import { useGetProductsQuery } from "../../features/product/ProductApi";
export default function AllProduct() {
  const dataArray = [
    {
      id: 1,
      image: bestSell,
      heading: "Fashion Tops Juniors",
      amount: 29.99,
      deleteAmount: 35.99,
    },
    {
      id: 2,
      image: featuredSale,
      heading: "Men Casual Blazer",
      amount: 49.99,
      deleteAmount: 65.65,
    },
    {
      id: 3,
      image: watchDeals,
      heading: "Woman Lathers Jacket",
      amount: 19.99,
      deleteAmount: 35.2,
    },
    {
      id: 4,
      image: featuredSale,
      heading: "Fashion Tops Juniors",
      amount: 49.99,
      deleteAmount: 80.85,
    },
    {
      id: 5,
      image: watchDeals,
      heading: "Men Casual Blazer",
      amount: 19.99,
      deleteAmount: 30.9,
    },
    {
      id: 6,
      image: bestSell,
      heading: "Bikinis Women Casual",
      amount: 99.99,
      deleteAmount: 30.6,
    },
    {
      id: 7,
      image: watchDeals,
      heading: "Woman Lathers Jacket",
      amount: 19.99,
      deleteAmount: 28.95,
    },
    {
      id: 8,
      image: featuredSale,
      heading: "Fashion Tops Juniors",
      amount: 49.99,
      deleteAmount: 85.56,
    },
    {
      id: 9,
      image: watchDeals,
      heading: "Fashion Tops Juniors",
      amount: 19.99,
      deleteAmount: 86.75,
    },
    {
      id: 10,
      image: bestSell,
      heading: "Fashion Tops Juniors",
      amount: 99.99,
      deleteAmount: 120.58,
    },
    {
      id: 11,
      image: watchDeals,
      heading: "Woman Lathers Jacket",
      amount: 19.99,
      deleteAmount: 24.45,
    },
    {
      id: 12,
      image: featuredSale,
      heading: "Men Casual Blazer",
      amount: 49.99,
      deleteAmount: 75.75,
    },
    {
      id: 13,
      image: watchDeals,
      heading: "Fashion Tops Juniors",
      amount: 19.99,
      deleteAmount: 37.54,
    },
    {
      id: 14,
      image: bestSell,
      heading: "Woman Lathers Jacket",
      amount: 99.99,
      deleteAmount: 140.92,
    },
    {
      id: 15,
      image: watchDeals,
      heading: "Bikinis Women Casual",
      amount: 19.99,
      deleteAmount: 22.56,
    },
    {
      id: 16,
      image: featuredSale,
      heading: "Men Casual Blazer",
      amount: 49.99,
      deleteAmount: 89.45,
    },
    {
      id: 17,
      image: watchDeals,
      heading: "Woman Lathers Jacket",
      amount: 19.99,
      deleteAmount: 42.63,
    },
    {
      id: 18,
      image: bestSell,
      heading: "Fashion Tops Juniors",
      amount: 99.99,
      deleteAmount: 140.85,
    },
  ];
  const {data:products, isLoading,isError,error} = useGetProductsQuery();

const AllProducts = products?.data?.products;

  console.log("products",AllProducts)
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

      <div className="grid grid-cols-3 gap-10">
        {AllProducts?.map((product) => (
          <div key={product._id}>
            <AllProductList product={product}></AllProductList>
          </div>
        ))}
      </div>
    </div>
  );
}
