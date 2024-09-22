import React, { useState } from "react";
import LeftMainHeader from "./LeftMainHeader";
import RightMainHeader from "./RightMainHeader";
import MobileResponsive from "../mainHeader/MobileResponsive";
export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" py-[30px]  xl:px-0  px-4">
      <div className="flex  justify-between container">
        <LeftMainHeader></LeftMainHeader>
        <div>
          <RightMainHeader
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
          ></RightMainHeader>

          <MobileResponsive
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
          ></MobileResponsive>
        </div>
      </div>
    </div>
  );
}
