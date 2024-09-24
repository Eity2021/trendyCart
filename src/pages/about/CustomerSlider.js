import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./about.css";
import { EffectCoverflow } from "swiper/modules";
import FastDelivery from "../../components/svg/FastDelivery";
import Star from "../../components/svg/Star";
export default function CustomerSlider() {
  return (
    <div className="xl:mx-80 lg:mx-20 md:mx-10  mx-6 ">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-[26px] shadow-md">
              <div className="flex justify-center">
                <div className="w-[88px] h-[88px] border flex justify-center items-center rounded-[50%]">
                  <FastDelivery></FastDelivery>
                </div>
              </div>
              <p className="text-lg text-center font-bold  text-header  pb-1 pt-2">
                Emma Watson
              </p>
              <p className="text-sm text-center font-bold  text-text-paragraph  pb-1 ">
                CEO Amazon
              </p>
              <div className="flex justify-center py-1 ">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
              <p className="text-sm  text-text-paragraph pb-1 text-center ">
                “ In promotion and advertising, a testimonial show consists of a
                person's written spoken statement extolling the virtue of a
                product ”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
