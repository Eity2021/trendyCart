import React from "react";
import Star from "../../components/svg/Star";
import ShopCart from "../../components/svg/ShopCart";
import ShopWishList from "../../components/svg/ShopWishList";
import ShopEye from "../../components/svg/ShopEye";
export default function AllProductList({ product }) {
  const { image, title, amount, deleteAmount } = product;
  return (
    <div>
      <div className="">
        <div className="relative group">
          <img 
            src={image}
            alt="image"
            className="w-[100%] h-[360px] rounded-md "
          />
          <div className="absolute bottom-0 bg-white w-[100%]  shadow-lg h-14  opacity-0  group-hover:opacity-100 transition-opacity duration-300 ">
            <div className="flex gap-2 justify-center items-center h-[100%]">
              <div className="w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer bg-loginColor hover:bg-loginBg rounded-md">
                <ShopWishList></ShopWishList>
              </div>
              <div className=" w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer  bg-loginColor hover:bg-loginBg rounded-md">
                <ShopCart></ShopCart>
              </div>
              <div className=" w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer  bg-loginColor hover:bg-loginBg rounded-md">
                <ShopEye></ShopEye>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[14px]">
          <div className="text-center">
            <p> {title} </p>
            <div className="flex gap-2 justify-center pt-[6px]">
              <del className="text-sm text-text-paragraph">
                {deleteAmount}
                <sup>tk</sup>
              </del>
              <p className="text-medium font-bold text-loginBg ">{amount} tk</p>
            </div>
            <div className="flex justify-center">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
