import React from "react";
import Banner from "./banner/Banner";
import slider_bg from "../../assets/images/home/slider_bg.jpg";
import HomeCards from "./homeCards/HomeCards";
import SellingProducts from "./sellingProducts/SellingProducts";
import Deals from "./deals/Deals";
import BestCategories from "./bestCategories/BestCategories";
import FTOProduct from "./ftoProduct/FTOProduct";
export default function Home() {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
       style={{ backgroundImage: `url(${slider_bg})` }}
      >
        <div className="container">
          <div className="md:mx-2  mx-2">
            <div className="grid  xl:grid-cols-5   grid-cols-1  gap-4">
              <div></div>
              <div className="lg:col-span-4">
                <Banner></Banner>
              </div> 
            </div>
          </div>
        </div>
      </div>
 <div className="my-24">
 <div className="">
      <div className="container">
    <HomeCards></HomeCards>
    </div>
        <div>
          <SellingProducts></SellingProducts>
        </div>

      </div>
 </div>
      <div className="bg-[#fcf0ee] py-[100px]">
          <div className="container">
          <Deals></Deals>
          </div>
        </div>
        <div className="container"> 
          <BestCategories></BestCategories>
        </div>
        <div className="container"> 
          <FTOProduct></FTOProduct>
        </div>
    </div>
  );
}
