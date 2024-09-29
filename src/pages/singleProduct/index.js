import React from "react";
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
import SingleProductDetails from "./SingleProductDetails";
import SIngleProductImage from "./SIngleProductImage";
export default function SingleProduct() {
  return (
    <>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="py-[100px]">
          <p className="uppercase text-5xl  font-bold text-header  font-poppins text-center">
            Shop Single
          </p>
          <div className="flex justify-center">
            <div>
              <span className=" text-medium  font-medium font-poppins  text-text-paragraph">
                Home
              </span>
              <span className="px-2"> | </span>
              <span className="text-medium text-loginColor  font-medium">
                Shop Details
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 xl:mx-64 lg:mx-40 md:mx-20 mx-8 ">
        <div className="container">
          <div className="grid grid-cols-2">
            <SIngleProductImage></SIngleProductImage>
            <SingleProductDetails></SingleProductDetails>
          </div>
        </div>
      </div>
    </>
  );
}
