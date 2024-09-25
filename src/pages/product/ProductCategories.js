import React from "react";
import RoundShape from "../../components/svg/RoundShape";

export default function ProductCategories() {
  return (
    <div className="bg-white shadow-lg px-5 pt-12 pb-8">
      <div className="pb-6">
        <p className="uppercase font-bold text-medium text-header">
          product categories
        </p>
      </div>
      <div className="flex justify-between ">
        <div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4 text-sm text-text-paragraph  font-medium ">
              {" "}
              Accessories
            </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4  text-sm text-text-paragraph  font-medium ">
              {" "}
              Leather Jacket
            </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4  text-sm text-text-paragraph  font-medium ">
              {" "}
              Woman Hoodies
            </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4  text-sm text-text-paragraph  font-medium ">
              {" "}
              Man Shoes
            </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4  text-sm text-text-paragraph  font-medium ">
              {" "}
              Baby Troys
            </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-[2px]">
              <RoundShape></RoundShape>
            </div>
            <p className="pb-4 text-sm text-text-paragraph  font-medium ">
              {" "}
              Kitchen Accessories
            </p>
          </div>
        </div>
        <div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className="text-sm text-text-paragraph  font-bold">27</p>
          </div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className="text-sm text-text-paragraph  font-bold">7</p>
          </div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className=" text-sm text-text-paragraph  font-bold">6</p>
          </div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className=" text-sm text-text-paragraph  font-bold">12</p>
          </div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className=" text-sm text-text-paragraph  font-bold">5</p>
          </div>
          <div className="border w-6 h-6 flex justify-center item-center rounded-sm bg-gray-tw mb-3">
            <p className="  text-sm text-text-paragraph  font-bold">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
