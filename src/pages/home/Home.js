import React from "react";
import Banner from "./Banner";
import slider_bg from "../../assets/images/home/slider_bg.jpg";
import HomeCards from "./homeCards/HomeCards";
import SellingProducts from "./sellingProducts/SellingProducts";
export default function Home() {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${slider_bg})` }}
      >
        <div className="container">
          <div className="md:mx-2  mx-2">
            <div className="grid grid-cols-5 gap-4">
              <div></div>
              <div className="col-span-4">
                <Banner></Banner>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
    <div>
    <HomeCards></HomeCards>
    </div>
        <div>
          <SellingProducts></SellingProducts>
        </div>
      </div>
    </div>
  );
}
