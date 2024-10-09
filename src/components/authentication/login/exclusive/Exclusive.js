import React from "react";
import limitedOfferBg from "../../../../assets/images/login/limited_offer_bg.jpg";
import loginImage from "../../../../assets/images/login/loginImage.png";
import limitedOffer from "../../../../assets/images/login/limited_offer_discount.png";

export default function Exclusive() {
  return (
    <div className="relative">
      <div
        className=" bg-cover bg-center xl:py-0  py-12"
        style={{ backgroundImage: `url(${limitedOfferBg})` }}
      >
        <div className="md:flex md:justify-between gap-4 block ">


          <div className="2xl:pl-[300px] md:pl-[30px] pl-[0px] flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="order-2 md:order-1 z-50">
                <p className="text-sm text-loginColor md:text-end text-center pb-3 uppercase">
                  Exclusive offer
                </p>
               <div className="flex justify-end md:w-[400px] w-full"> 
               <p className="2xl:text-5xl  md:text-2.5xl  text-end   text-2xl   text-white  leading-[50px]  uppercase ">
                  Smart Watch  Bracelet
                </p>
               </div>
              </div>
              <div className="flex items-center md:justify-start justify-center order-1 md:order-2 z-50">
                <img src={limitedOffer} alt="" />
              </div>
            </div>
          </div>

          <div className="md:flex block gap-8">
            <div className="flex  items-center  justify-center xl:pr-0  md:pr-[30px] pr-[0px]">
              <div>
                <div className="bg-white lg:px-8 px-4  py-3 flex justify-center">
                  <p className="uppercase md:text-link text-sm  text-loginColor">
                    Limited Time Offer
                  </p>
                </div>
                <div className="flex">
                  <small className="origin-center-right	 rotate-90  text-loginColor  mr-4 z-50" >
                    Upto
                  </small>
                  <div className=" bg-loginColor px-4 py-2 mt-2 z-50">
                    <p className="text-white md:text-link text-sm">BDT 500.00</p>
                  </div>
                  <p className="flex items-center text-white  font-bold pl-2  z-50">
                    OFF
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:flex  hidden">
              <img
                src={loginImage}
                alt=""
                className="w-[333px] h-[227px]"
              ></img>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2  md:left-72 left-14">
          <p className=" 2xl:text-7xl   xl:text-5xl  md:text-3xl  text-xl  font-bold text-overlapColor ">
            TrendyCart Top Sale 35%
          </p>
        </div>
      </div>
    </div>
  );
}
