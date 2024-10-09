import React from "react";
import Register from "../../../components/svg/Register";

import { useNavigate } from "react-router-dom";

export default function RightSideTopHeader() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegistration = () => {
    navigate("/registration");
  };
  return (
    <div>
      <div className="flex  justify-center   gap-2">
        <Register></Register>
        <div onClick={handleRegistration} className="cursor-pointer"  >
          <p className="text-sm text-text-paragraph"> Register</p>
        </div>

        <div>
          <p className="text-sm text-text-paragraph pt-[2px]">or</p>
        </div>
        <div onClick={handleLogin} className="cursor-pointer">
          <p className="text-sm text-text-paragraph">Sign In</p>
        </div>
      </div>
    </div>
  );
}
