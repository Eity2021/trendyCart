import React from "react";
import banner from "../../../assets/images/home/home_banner.png";
export default function Banner() {
  return (
    <div>
      <img src={banner} alt="banner" className="w-screen  h-[546px] pt-5 mb-10" />
    </div>
  );
}
