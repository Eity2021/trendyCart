import React from "react";
import Star from "../../../components/svg/Star";
import HalfStar from "../../../components/svg/HalfStar";
import featuredSale from "../../../assets/images/home/featuredSale.png";
export default function FTOFeaturedProduct() {
  return (
    <div className="">
      <div className="border  p-4   relative">
        <div className="flex gap-6">
          <div className="border w-[110px] h-[110px]">
            <img src={featuredSale} alt="featuredSale" />
          </div>
          <div className="border h-27 "></div>
          <div className="flex items-center justify-start ">
            <div>
              <p className="text-medium font-bold  text-header  pb-1">
                Stylish Bag
              </p>
              <p className="text-[.7rem] font-bold  text-loginBg  pb-1">
                US $ 17.29{" "}
                <span className="text-text-paragraph"> | 50% off</span>
              </p>
              <div className="flex gap-[1px] pt-1">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <HalfStar></HalfStar>
              </div>
            </div>
            <div className="absolute right-4 top-4">
            <div className="bg-loginColor text-white text-[.6rem] py-[2px] px-[4px] rounded-[2px]">
            <p>New!</p>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className="border  p-4   relative mt-3">
        <div className="flex gap-6">
          <div className="border w-[110px] h-[110px]">
            <img src={featuredSale} alt="featuredSale" />
          </div>
          <div className="border h-27 "></div>
          <div className="flex items-center justify-start ">
            <div>
              <p className="text-medium font-bold  text-header  pb-1">
                Stylish Bag
              </p>
              <p className="text-[.7rem] font-bold  text-loginBg  pb-1">
                US $ 17.29{" "}
                <span className="text-text-paragraph"> | 50% off</span>
              </p>
              <div className="flex gap-[1px] pt-1">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <HalfStar></HalfStar>
              </div>
            </div>
            <div className="absolute right-4 top-4">
            <div className="bg-loginColor text-white text-[.6rem] py-[2px] px-[4px] rounded-[2px]">
            <p>New!</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
