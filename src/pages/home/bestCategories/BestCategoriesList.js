import React from "react";
import dealImage from "../../../assets/images/home/dealImage.jpeg";
export default function BestCategoriesList() {
  return (
    <div className="mx-6  mt-14 mb-20 ">
      <div className="grid grid-cols-6 gap-8">
        <div>
          <img
            src={dealImage}
            alt=""
            className=" w-full  h-[220px]  rounded-full"
          />

          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center  uppercase hover:text-loginColor">
              Woman clothes
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>

        <div className="">
          <img
            src={dealImage}
            alt=""
            className=" w-full  h-[220px]   border rounded-full"
          />
          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center uppercase hover:text-loginColor">
              Fashion Party Dress
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>

        <div>
          <img
            src={dealImage}
            alt=""
            className=" w-full  h-[220px]    border rounded-full"
          />

          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center  uppercase hover:text-loginColor">
              smart watch
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>
        <div>
          <img
            src={dealImage}
            alt=""
            className="    w-full  h-[220px]   border rounded-full"
          />

          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center uppercase hover:text-loginColor">
              fashion clothes
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>
        <div>
          <img
            src={dealImage}
            alt=""
            className=" w-full  h-[220px]   border rounded-full"
          />

          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center  uppercase hover:text-loginColor">
              Woman clothes
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>

        <div>
          <img
            src={dealImage}
            alt=""
            className=" w-full  h-[220px]    border rounded-full"
          />

          <div className="pt-4">
            <h2 className="text-medium text-black font-bold text-center  uppercase hover:text-loginColor">
              hair removal
            </h2>
            <span className="text-text-paragraph text-sm font-medium flex justify-center">
              Women Fashion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
