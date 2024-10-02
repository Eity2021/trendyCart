import React from "react";
import DetailsPageImage from "../../assets/images/detailsPage/DetailsPage-Image.jpeg";
export default function SIngleProductImage() {
  return (
    <div>
      <div className="flex gap-6">
        <div>
          <div className="border  bg-slate-500 mb-4">
            <img
              src={DetailsPageImage}
              alt="DetailsPageImage"
              className="w-[103px]  h-[129px]"
            />
          </div>
          <div className="border  bg-slate-500 mb-4">
            <img
              src={DetailsPageImage}
              alt="DetailsPageImage"
              className="w-[103px]  h-[129px]"
            />
          </div>
          <div className="border  bg-slate-500 mb-4">
            <img
              src={DetailsPageImage}
              alt="DetailsPageImage"
              className="w-[103px]  h-[129px]"
            />
          </div>
          <div className="border  bg-slate-500">
            <img
              src={DetailsPageImage}
              alt="DetailsPageImage"
              className="w-[103px]  h-[129px]"
            />
          </div>
        </div>

        <div>
          <div className="border  bg-slate-500 ">
            <img
              src={DetailsPageImage}
              alt="DetailsPageImage"
              className="w-[499px] h-[597px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
