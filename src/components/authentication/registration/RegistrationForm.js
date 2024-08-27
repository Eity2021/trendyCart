import React from "react";
import patternBg from "../../../assets/images/login/pattern_bg.jpg";
import myAccountBg from "../../../assets/images/login/my_account_bg.png";
import SocialAuth from "../login/SocialAuth";

export default function RegistrationForm() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      <div className="flex justify-center py-24 ">
        <div className="">
          <h1 className="text-center text-4xl font-bold ">
            LOGIN / <span className="text-loginColor"> REGISTER</span>
          </h1>

          <div
            className=" bg-cover bg-center bg-loginBg  [750px] w-full  mt-8"
            style={{ backgroundImage: `url(${myAccountBg})` }}
          >
            <div className="px-20 py-8">
              <SocialAuth></SocialAuth>

              <div className="lg:px -0 px-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="">
                    <label className="text-black  text-sm">FIRST NAME *</label>

                    <div className="pt-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered-none  rounded-none w-full max-w"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="text-black  text-sm">LAST NAME *</label>

                    <div className="pt-2">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered-none  rounded-none w-full max-w"
                      />
                    </div>
                  </div>
                </div>

                <div className=" mb-2">
                  <label className="text-black  text-sm">EMAIL ADDRESS *</label>

                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered-none  rounded-none w-full max-w"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-black  text-sm">PASSWORD *</label>
                  <div className="pt-2">
                    <input
                      type="password"
                      placeholder="Type password"
                      className="input input-bordered-none  rounded-none w-full max-w"
                    />
                  </div>
                </div>
              </div>

              <div className=" mt-8 lg:px -0 px-4">
                <div className="bg-loginColor text-white w-32 flex justify-center items-center hover:bg-buttonHover">
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
