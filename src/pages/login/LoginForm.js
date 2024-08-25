import React from "react";
import patternBg from "../../assets/images/login/pattern_bg.jpg";
import myAccountBg from "../../assets/images/login/my_account_bg.png";
import SocialAuth from "./SocialAuth";

export default function LoginForm() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      <div className="flex justify-center py-24 ">
        <div className="">
          <h1 className="text-center text-4xl font-bold ">
            <span className="text-loginColor">LOGIN </span>/ REGISTER
          </h1>

          <div
            className=" bg-cover bg-center bg-loginBg  w-[750px]  mt-8"
            style={{ backgroundImage: `url(${myAccountBg})` }}
          >
            <div className="px-20 py-8">
              <SocialAuth></SocialAuth>

              <div>
                <div className="">
                  <label className="text-black  text-sm">
                    USERNAME OR EMAIL ADDRESS *
                  </label>

                  <div className="pt-3">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered-none  rounded-none w-full max-w"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <label className="text-black  text-sm">PASSWORD *</label>
                  <div className="pt-3">
                    <input
                      type="password"
                      placeholder="Type password"
                      className="input input-bordered-none  rounded-none w-full max-w"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="pt-6 flex  items-center ">
                    <input type="checkbox" className="checkbox w-4 h-4" />
                    <div>
                      <small className="text-sm text-black pl-2">
                        {" "}
                        Remember me
                      </small>
                    </div>
                  </div>

                  <div className="pt-6">
                    <small className="text-sm text-black pl-2 uppercase">
                      {" "}
                      Remember me
                    </small>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="bg-loginColor text-white w-32 flex justify-center items-center hover:bg-buttonHover">
                  <button className="py-3 text-link">LOGIN</button>
                </div>
                <div className="bg-white text-textButtonColor w-32 flex justify-center items-center hover:bg-buttonHover  hover:text-white">
                  <button className="py-3 text-link">SIGN UP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
