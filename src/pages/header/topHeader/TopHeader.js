import React from "react";
import LeftSideTopHeader from "./LeftSideTopHeader";
import RightSideTopHeader from "./RightSideTopHeader";
export default function TopHeader() {
  return (
    <div className=" py-4 border-b  xl:px-0  px-4 ">
      <div className="md:flex sm:block  justify-between container" >
        <LeftSideTopHeader></LeftSideTopHeader>
        <RightSideTopHeader></RightSideTopHeader>
      </div>
    </div>
  );
}
