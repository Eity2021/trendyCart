import React from "react";
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
import Terms from "./Terms";

export default function TermsAndConditions() {
  return (
    <div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="py-[100px]">
          <p className="uppercase text-5xl  font-bold text-header  font-poppins text-center">
            {" "}
            Terms and conditions
          </p>
          <div className="flex justify-center">
            <div>
              <span className=" text-medium  font-medium font-poppins  text-text-paragraph">
                Home
              </span>{" "}
              <span className="px-2"> | </span>{" "}
              <span className="text-medium text-loginColor  font-medium">
                Terms and conditions
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="container">
          <Terms></Terms>
        </div>
        <div>
        {/* <ShippingInfo></ShippingInfo> */}
        </div>
      </div>
    </div>
  );
}
