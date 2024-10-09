import React from "react";
export default function ProductSize() {
  return (
    <div className="py-6 " >
      <div className="border-dashed border-t">
        <div>
          <p className="uppercase  text-medium   font-bold text-header pb-[16px] pt-6">
            Size
          </p>
        </div>

        <div className="flex gap-2">
          <div className="group">
            <div className="border-2 h-8 w-8 flex justify-center items-center cursor-pointer bg-white group-hover:bg-loginColor">
              <p className="text-text-paragraph text-medium font-medium group-hover:text-white">
                S
              </p>
            </div>
          </div>

          <div className="group">
            <div className="border-2 h-8 w-8 flex justify-center items-center cursor-pointer bg-white group-hover:bg-loginColor">
              <p className="text-text-paragraph text-medium font-medium group-hover:text-white">
                M
              </p>
            </div>
          </div>

          <div className="group">
            <div className="border-2 h-8 w-8 flex justify-center items-center cursor-pointer bg-white group-hover:bg-loginColor">
              <p className="text-text-paragraph text-medium font-medium group-hover:text-white">
                L
              </p>
            </div>
          </div>

          <div className="group">
            <div className="border-2 h-8 w-8 flex justify-center items-center cursor-pointer bg-white group-hover:bg-loginColor">
              <p className="text-text-paragraph text-medium font-medium group-hover:text-white">
                Xl
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
