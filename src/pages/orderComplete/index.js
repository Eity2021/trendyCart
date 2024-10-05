import React from "react";
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
import Order from "./Order";
export default function OrderComplete() {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="py-[100px]">
          <p className="uppercase text-5xl  font-bold text-header  font-poppins text-center">
            {" "}
            order completed
          </p>
          <div className="flex justify-center">
            <div>
              <span className=" text-medium  font-medium font-poppins  text-text-paragraph">
                Home
              </span>{" "}
              <span className="px-2"> | </span>{" "}
              <span className="text-medium text-loginColor  font-medium">
                Order Completed
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
<div className="my-16 lg:mx-0 mx-8">
<Order></Order>
</div>
      </div>
    </div>
  );
}
