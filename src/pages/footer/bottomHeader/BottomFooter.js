import React from "react";
import cardImg from "../../../assets/images/bottom/card_img.png";

export default function BottomFooter() {
  return (
    <div className="bg-bottomColor ">
      <div className="container ">
        <div className="md:mx-2  mx-2 py-4">
          <div className="sm:flex block justify-between ">
            <div className="flex  items-center md:justify-start justify-center">
              <p className="text-sm text-white ">
                Copyright © 2020 Venam All Rights Reserved.{" "}
              </p>
            </div>
            <div className="">
              <img src={cardImg} alt="" className="sm:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
