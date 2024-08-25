import React from "react";

export default function SocialAuth() {
  return (
    <div>
      <div className="pt-8">
        <p className="text-center text-black ">
          Welcome TrendyCart Please Login Your{" "}
          <span className="text-loginColor">Account</span>
        </p>
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <div className="bg-[#405f9f] text-white w-56     flex justify-center items-center hover:bg-buttonHover">
          <button className="py-3 text-link">Login with facebook</button>
        </div>
        <div className="bg-white text-textButtonColor w-56 flex justify-center items-center hover:bg-buttonHover  hover:text-white">
          <button className="py-3 text-link">Login with Google</button>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <p className="text-x text-subsColor"> -OR-</p>
      </div>
    </div>
  );
}
