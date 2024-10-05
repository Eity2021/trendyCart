import React from "react";
import order from "../../assets/images/login/my_account_bg.png";
import completeOrder from "../../assets/images/cart/check.png";
export default function Order() {
  return (
    <div className="flex justify-center">
      <div
        className=" bg-cover bg-center lg:w-[720px] w-[100%] "
        style={{ backgroundImage: `url(${order})` }}
      >
        <div className="mt-8">
          <h2 className="text-4xl text-header font-bold text-center">
            <span className="text-loginColor">Your</span> Order Is Completed!
          </h2>
        </div>
        <div className="flex justify-center mt-12">
          <img src={completeOrder} alt="" className="w-20 h-20" />
        </div>
        <div>
          <p className="text-subsColor text-sm text-normal text-center mt-8">
            Thank you for your order! Your order is being processed and will be
            completed within 6-12
          </p>
          <p className="text-subsColor text-sm text-normal text-center mt-2">
            Hours. You will receive an email confirmation when your order is
            completed.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <button className="uppercase bg-loginColor text-white px-8 py-3 rounded-md text-medium">
            Continue shopping
          </button>
        </div>

        <div className=" pb-8">
          <p className="text-header text-medium text-normal text-center mt-8">
            Get answers to all your{" "}
            <span className="text-loginColor ">Questions</span> you might have.
          </p>
        </div>
      </div>
    </div>
  );
}
