import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../../../components/svg/Cart";
import WishList from "../../../components/svg/WishList";
import Hamburger from "../../../components/svg/Hamburger";
import Profile from "./Profile";
import HeaderCart from "../../headerCart/HeaderCart";
import { useGetUserQuery } from "../../../features/user/userApi";
import { useSelector } from "react-redux";
export default function RightMainHeader({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.auth?.accessToken);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const {
    data: user,
    isLoading,
    refetch,
  } = useGetUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token, refetch]);

  return (
    <div className="flex ">
      <ul className="hidden md:flex gap-8">
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
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cursor-pointer">
            <Cart></Cart>
            <div className="absolute top-[14px] left-[10px] bg-bgColor w-[22px] h-[22px] flex justify-center items-center rounded-[50%] text-sm">
              2
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-[50px] left-[-160px] w-[270px] bg-white shadow-md rounded-sm p-4">
              <HeaderCart></HeaderCart>
            </div>
          )}
        </li>
        <li>
          <div>{user && <Profile user={user}></Profile>}</div>
        </li>
      </ul>
      <div className="md:hidden pl-2">
        <button onClick={toggleSidebar}>
          <Hamburger></Hamburger>
        </button>
      </div>
    </div>
  );
}
