import React, { useState } from "react";
import { Link } from "react-router-dom";
import departmentsData from "../DepartmentsData.json";
import avatar from "../../../../assets/images/header/avatar.jpg";
import Department from "../../../../components/svg/Department";
export default function MobileCategoryDropdown() {
  const [openedDepartment, setOpenedDepartment] = useState(null);

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(true);
console.log(isMobileDropdownOpen)

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

{
    isMobileDropdownOpen && (
        <div className="absolute top-20 left-0 mt-2 w-72 bg-white rounded-md shadow-lg ">
        {departmentsData.map((department, index) => (
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
                    {department.title}
                  </p>
                </div>
              </div>

              <span className="text-sm text-black">
                {openedDepartment === index ? "▲" : "▼"}
              </span>
            </div>
            {openedDepartment === index && department.subcategories && (
              <div className="w-full bg-white rounded-md shadow-lg">
                {department.subcategories.map((subcategory, subIndex) => (
                  <Link
                    to={subcategory.path}
                    key={subIndex}
                    className="block p-2 text-sm text-black font-normal"
                  >
                    {subcategory.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
}
    
    </div>
  );
}
