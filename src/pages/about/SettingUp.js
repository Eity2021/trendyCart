import React from "react";
import FastDelivery from "../../components/svg/FastDelivery";

export default function SettingUp() {
  return (
    <div className="py-16 xl:mx-40 lg:mx-20 md:mx-10  mx-6 ">
      <div>
        <div className="text-center pb-8">
          <p className="text-loginColor  text-sm uppercase font-bold">
            why choose up
          </p>
          <h2 className="lg:text-4xl text-2xl font-bold  text-header   uppercase pt-1">
            experience in setting up
          </h2>
        </div>

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols1 gap-6">
            <div className=" bg-white  p-12">
              <FastDelivery></FastDelivery>
              <p className="text-xl font-bold  text-header  pb-3 pt-2">Home Fast Delivery</p>
              <p className="text-sm  text-text-paragraph pb-3">
                Lorem Ipsum simply dumm the printing and typesetting indust orem
                Ipsum has been the industry standard dummy men book.
              </p>
              <p className="text-medium  text-text-paragraph pb-1">Smart UHD TV</p>
              <p className="text-medium  text-text-paragraph">Snow Frost in Freezer</p>
            </div>
            <div className=" bg-white  p-12">
              <FastDelivery></FastDelivery>
              <p className="text-xl font-bold  text-header  pb-3 pt-2">Home Fast Delivery</p>
              <p className="text-sm  text-text-paragraph pb-3">
                Lorem Ipsum simply dumm the printing and typesetting indust orem
                Ipsum has been the industry standard dummy men book.
              </p>
              <p className="text-medium  text-text-paragraph pb-1">Smart UHD TV</p>
              <p className="text-medium  text-text-paragraph">Snow Frost in Freezer</p>
            </div>
            <div className=" bg-white  p-12">
              <FastDelivery></FastDelivery>
              <p className="text-xl font-bold  text-header  pb-3 pt-2">Home Fast Delivery</p>
              <p className="text-sm  text-text-paragraph pb-3">
                Lorem Ipsum simply dumm the printing and typesetting indust orem
                Ipsum has been the industry standard dummy men book.
              </p>
              <p className="text-medium  text-text-paragraph pb-1">Smart UHD TV</p>
              <p className="text-medium  text-text-paragraph">Snow Frost in Freezer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
