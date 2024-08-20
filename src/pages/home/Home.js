import React from "react";
import Banner from "./Banner";
import slider_bg from "../../images/home/slider_bg.jpg";
export default function Home() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${slider_bg})` }}
    >
      <div className="container">
        <div className="md:mx-2  mx-2">
          <div className="grid grid-cols-6 gap-4">
            <div></div>
            <div className="col-span-5">
              <Banner></Banner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
