import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dealImage from "../../../assets/images/home/dealImage.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./deals.css";
import { Autoplay } from "swiper/modules";

export default function DealsProductsList() {
  return (
    <div className="mt-8">
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}

          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          // loop={true}
          // modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <div className="w-[193px] h-[178px] my-8  ">
                <img src={dealImage} alt="dealImage" />
              </div>

              <div>
                <h2 className="text-medium text-black font-bold flex justify-center"> Fashion Party Dress </h2>
                <div className="flex   justify-center  gap-2 mb-4">
                  <p className=" text-link font-medium text-loginBg">
                    US 700.00 BDT
                  </p>
                  <p className="text-text-paragraph">|</p>
                  <p className="text-link font-medium text-text-paragraph">
                    50% off
                  </p>
                </div>
              </div>
              <div className="border mb-4"></div>

              <div className="flex justify-between">
                <p className="text-sm text-text-paragraph">Total Sold : 25</p>
                <p className="text-sm text-text-paragraph">Stocks : 4525</p>
              </div>
              <div className="w-100  h-[6px] bg-bgAshColor rounded-lg my-4">
                <div className="w-[80px] h-[6px] bg-bgColor rounded-lg"></div>
              </div>
              <div className="mb-4">
                <span className="text-bgColor text-xl font-bold">
                  Hurry Up{" "}
                </span>{" "}
                <span className="text-text-paragraph text-sm font-medium">
                  Limited Time Offer
                </span>
              </div>


              <div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="border h-10 rounded-md bg-black"></div>
                  <div className="border h-10 rounded-md bg-black"></div>
                  <div className="border h-10 rounded-md bg-black"></div>
                  <div className="border h-10 rounded-md bg-bgColor"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
