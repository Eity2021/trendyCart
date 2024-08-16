import React from "react";
import Register from "../../../components/svg/Register";
export default function RightSideTopHeader() {
  return (
    <div>
      <div className="flex  justify-center   gap-2">
        <Register></Register>
        <div>
          <a href="#" className="text-sm text-text-paragraph">
            {" "}
            Register
          </a>
        </div>

        <div>
          <p className="text-sm text-text-paragraph pt-[2px]">or</p>
        </div>
        <div>
          <a href="#" className="text-sm text-text-paragraph">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
