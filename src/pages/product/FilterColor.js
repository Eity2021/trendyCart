import React from "react";

export default function FilterColor() {
  return (
    <div className="py-6 ">
      <div className="border-dashed border-t">
        <div>
          <p className="uppercase  text-medium   font-bold text-header pb-[16px] pt-6">
            Filter Color
          </p>
        </div>

        <div className="flex gap-1">
          <div className="border w-8 h-8 rounded-[50%] bg-loginColor"></div>
          <div className="border w-8 h-8 rounded-[50%] bg-[#0b4d8c]"></div>
          <div className="border w-8 h-8 rounded-[50%] bg-[#0acc8e]"></div>
          <div className="border w-8 h-8 rounded-[50%] bg-[#af8e0a]"></div>
          <div className="border w-8 h-8 rounded-[50%] bg-[#ead009]"></div>
        </div>
      </div>
    </div>
  );
}
