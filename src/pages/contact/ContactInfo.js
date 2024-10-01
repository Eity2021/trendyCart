import React from "react";
import Location from "../../components/svg/Location";
import Email from "../../components/svg/Email";
import Phone from "../../components/svg/Phone";

export default function ContactInfo() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8  lg:mx-24 md:mx-16 mx-8">
        <div className="flex justify-center items-center bg-white py-10">
          <div className="">
            <div className="flex justify-center items-center ">
              <div className="border w-16 h-16 flex justify-center items-center rounded-[50%] bg-loginColor">
                <Location></Location>
              </div>
            </div>
            <div>
              <h2 className="text-header text-lg font-bold text-center pt-1">
                Our Location
              </h2>
              <p className="text-text-paragraph text-sm  font-medium  text-center pt-2">
                W898 RTower Stat, Suite 56 <br></br>
                Brockland, CA 9622 United States
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white py-10">
          <div className="">
            <div className="flex justify-center items-center ">
              <div className="border w-16 h-16 flex justify-center items-center rounded-[50%] bg-loginColor">
                <Phone></Phone>
              </div>
            </div>
            <div>
              <h2 className="text-header text-lg font-bold text-center pt-1">
                Our Phone
              </h2>
              <p className="text-text-paragraph text-sm  font-medium  text-center pt-2">
                Contacr Numbers: 458-965-3224<br></br>
                458-965-3224
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white py-10">
          <div className="">
            <div className="flex justify-center items-center ">
              <div className="border w-16 h-16 flex justify-center items-center rounded-[50%] bg-loginColor">
                <Email></Email>
              </div>
            </div>
            <div>
              <h2 className="text-header text-lg font-bold text-center pt-1">
                Our Email
              </h2>
              <p className="text-text-paragraph text-sm  font-medium  text-center pt-2">
                Email Us: Support@info.Com<br></br>
                Vanamsupport.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
