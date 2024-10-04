import React from "react";
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
import CheckoutForm from "./CheckoutForm";
import CheckoutCalculation from "./CheckoutCalculation";
import ShippingInfo from "./ShippingInfo";
import Exclusive from "../../components/authentication/login/exclusive/Exclusive";
export default function CheckOut() {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="py-[100px]">
          <p className="uppercase text-5xl  font-bold text-header  font-poppins text-center">
            {" "}
            Shopping Checkout
          </p>
          <div className="flex justify-center">
            <div>
              <span className=" text-medium  font-medium font-poppins  text-text-paragraph">
                Home
              </span>{" "}
              <span className="px-2"> | </span>{" "}
              <span className="text-medium text-loginColor  font-medium">
                Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-6 pb-16 border-b mt-20">
          <div className="col-span-2">
            <CheckoutForm></CheckoutForm>
          </div>
          <div>
            <CheckoutCalculation></CheckoutCalculation>
          </div>
        </div>
        <div>
          <ShippingInfo></ShippingInfo>
        </div>
      </div>
      <div>
        <Exclusive></Exclusive>
      </div>
    </div>
  );
}
