import React from "react";
import Subscribe from "./subscribe/Subscribe";
import MiddleFooter from "./footerParts/Index";
import BottomFooter from "./bottomHeader/BottomFooter";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#f5f4ee]">
        <div className="container">
          <div className="md:mx-2  mx-2">
            <Subscribe></Subscribe>
            <MiddleFooter></MiddleFooter>
          </div>
        </div>
      </div>
      <BottomFooter></BottomFooter>
    </div>
  );
}
