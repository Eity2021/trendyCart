import React from "react";
import TopHeader from "./topHeader/TopHeader";
import MainHeader from "./mainHeader/MainHeader";
import Category from './categorySection/Category';

export default function Header() {
  return (
    <div>
      <TopHeader></TopHeader> 
      <MainHeader></MainHeader> 
      <Category></Category>
    </div>
  );
}

