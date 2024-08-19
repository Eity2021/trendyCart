import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../../components/svg/Cart";
import WishList from "../../../components/svg/WishList";
import Hamburger from "../../../components/svg/Hamburger";

export default function RightMainHeader({toggleSidebar}) {
  console.log(toggleSidebar)
  return (
    <div className="flex ">
       
      <ul className="hidden md:flex  gap-8">
        <li className="text-link text-header font-bold">
          <Link to="/">HOME</Link>
        </li>

        <li className="text-link text-header font-bold">
          <Link to="/about">ABOUT US</Link>
        </li>

        <li className="text-link text-header font-bold">
          <Link to="/product">PRODUCT</Link>
        </li>

        <li className="text-link text-header font-bold">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <div className="pr-8">
            <WishList></WishList>
          </div>
        </li>
      </ul>


 <ul className="flex lg:gap-8 gap-3">
      
      <li>
          <div className="relative ">
            <Cart></Cart>
            <div className="absolute top-[14px] left-[10px]   bg-bgColor w-[22px] h-[22px] flex justify-center items-center rounded-[50%] text-sm">
              2
            </div>
          </div>
        </li>
        <li>
        <div>
        <p className="text-link text-header font-bold">560.00 BDT</p>
        </div>
        </li>
      </ul>

      <div className="md:hidden pl-2">
          <button onClick={toggleSidebar}  >
            <Hamburger></Hamburger>
          </button>
        </div>
 </div>

  );
}
