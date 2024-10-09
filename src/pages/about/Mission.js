import React from "react";
import Projects from "../../components/svg/Projects";

export default function Mission() {
  return (
    <div className="py-[30px]">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex gap-2   border-r">
          <div className="flex items-center">
            <Projects></Projects>
          </div>
          <div>
            <p className="font-[900]  text-header text-2xl leading-6">324+</p>
            <small className="text-text-paragraph  text-sm font-semibold ">
              Projects
            </small>
          </div>
        </div>
        <div className="flex gap-2 border-r">
          <div className="flex items-center">
            <Projects></Projects>
          </div>
          <div>
            <p className="font-[900]  text-header text-2xl leading-6">
              3M <sup className="text-sm">BDT</sup>
            </p>
            <small className="text-text-paragraph  text-sm font-semibold ">
              Revenue
            </small>
          </div>
        </div>
        <div className="flex gap-2 border-r">
          <div className="flex items-center">
            <Projects></Projects>
          </div>
          <div>
            <p className="font-[900]  text-header text-2xl leading-6">379+</p>
            <small className="text-text-paragraph  text-sm font-semibold ">
              Awards
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
