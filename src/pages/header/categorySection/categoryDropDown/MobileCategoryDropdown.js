import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/images/header/avatar.jpg";
import Department from "../../../../components/svg/Department";
import LeftArrow from "../../../../components/svg/LeftArrow";
import RightArrow from "../../../../components/svg/RightArrow";
export default function MobileCategoryDropdown({ category }) {
  const categories = category?.data;

  const [openedDepartment, setOpenedDepartment] = useState(null);

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(true);

  const toggleDepartment = (index) => {
    setOpenedDepartment(openedDepartment === index ? null : index);
  };

  const toggleDropdownMobile = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="md:w-72 w-full bg-bgColor text-black py-[24px] px-3 font-semibold flex items-center justify-start"
        onClick={toggleDropdownMobile}
      >
        <Department />
        <span className="pl-2 text-link text-black">ALL DEPARTMENT</span>
      </button>

      {isMobileDropdownOpen && (
        <div className="absolute top-20 left-0 mt-2 md:w-72 w-full   bg-white rounded-md shadow-lg ">
          {categories?.map((departmentCategory, index) => (
            <div key={index} className="relative">
              <div
                className="p-[14.5px] bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                onClick={() => toggleDepartment(index)}
              >
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-black font-normal">
                      {departmentCategory.name}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-black">
                  {openedDepartment === index ? <LeftArrow /> : <RightArrow />}
                </span>
              </div>
              {openedDepartment === index &&
                departmentCategory.subCategories && (
                  <div className="w-full bg-white rounded-md shadow-lg">
                    {departmentCategory.subCategories.map(
                      (subcategory, subIndex) => (
                        <Link
                          to={subcategory.path}
                          key={subIndex}
                          className="block p-2 text-sm text-black font-normal"
                        >
                          {subcategory.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
