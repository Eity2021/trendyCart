import React from "react";
import limitedOfferBg from "../../../assets/images/login/limited_offer_bg.jpg";
import loginImage from "../../../assets/images/login/loginImage.png";
import limitedOffer from "../../../assets/images/login/limited_offer_discount.png";

export default function Exclusive() {
  return (
    <div className="relative">
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${limitedOfferBg})` }}
      >
        <div className="flex justify-between">
          <div className="pl-[300px] flex items-center">
            <div className="flex gap-8 ">
              <div className="z-50">
                <p className="text-sm text-loginColor text-end pb-3 uppercase">
                  Exclusive offer
                </p>
                <p className="text-5xl text-end text-white leading-[50px] uppercase">
                  Smart Watch <br></br>Bracelet
                </p>
              </div>
              <div className="flex items-center z-50">
                <img src={limitedOffer} alt="" />
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex  items-center">
              <div>
                <div className="bg-white px-8 py-3">
                  <p className="uppercase text-link text-loginColor">
                    Limited Time Offer
                  </p>
                </div>
                <div className="flex">
                  <small className="origin-center-right	 rotate-90  text-loginColor  mr-4">
                    Upto
                  </small>
                  <div className=" bg-loginColor px-4 py-2 mt-2">
                    <p className="text-white">BDT 500.00</p>
                  </div>
                  <p className="flex items-center text-white  font-bold pl-2">
                    OFF
                  </p>
                </div>
              </div>
            </div>
            <img src={loginImage} alt="" className="w-[333px] h-[227px]"></img>
          </div>
        </div>
        <div className="absolute bottom-2  left-72">
          <p className="text-8xl font-bold text-overlapColor ">
            TrendyCart Top Sale 35%
          </p>
        </div>
      </div>
    </div>
  );
}
