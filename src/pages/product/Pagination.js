import React from "react";
import LineLeftArrow from "../../components/svg/LineLeftArrow";
import LineRightArrow from "../../components/svg/LineRightArrow";

export default function Pagination() {
  return (
    <div className="my-8">
      <div className="bg-productPageBg py-10">
        <div className="flex items-center  justify-center  gap-4">
          <div className="flex items-center gap-1">
            <LineLeftArrow></LineLeftArrow>
            <p className="text-text-paragraph font-medium text-medium ">Prev</p>
          </div>
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-[50%] flex justify-center items-center  text-black hover:bg-loginColor hover:text-white">
              <p className="text-medium">1</p>
            </div>
            <div className="w-7 h-7 rounded-[50%] flex justify-center items-center  text-black hover:bg-loginColor hover:text-white">
              <p className="text-medium">2</p>
            </div>
            <div className="w-7 h-7 rounded-[50%] flex justify-center items-center  text-black hover:bg-loginColor hover:text-white">
              <p className="text-medium">3</p>
            </div>
            <div className="w-7 h-7 rounded-[50%] flex justify-center items-center  text-black hover:bg-loginColor hover:text-white">
              <p className="text-medium">4</p>
            </div>
            <p>...</p>
            <div className="w-7 h-7 rounded-[50%] flex justify-center items-center  text-black hover:bg-loginColor hover:text-white">
              <p className="text-medium">10</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-text-paragraph font-medium text-medium ">Next</p>
            <LineRightArrow></LineRightArrow>
          </div>
        </div>
      </div>
    </div>
  );
}
