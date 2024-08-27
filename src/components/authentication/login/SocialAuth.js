import React from "react";

export default function SocialAuth() {
  return (
    <div>
      <div className="pt-0">
        <p className="text-center text-black ">
          Welcome TrendyCart Please  {" "}
          <span className="text-loginColor">Signup</span>
        </p>
      </div>
      <div className="flex gap-4 mt-4 justify-center">
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
