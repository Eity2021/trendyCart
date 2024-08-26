import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftArrow from "../../../../components/svg/LeftArrow";
import RightArrow from "../../../../components/svg/RightArrow";
import Department from "../../../../components/svg/Department";
import avatar from "../../../../assets/images/header/avatar.jpg";
import departmentsData from "../DepartmentsData.json";

export default function CategoryDropDown() {
  const [hoveredDepartment, setHoveredDepartment] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const location = useLocation();
  const handleMouseEnter = (index) => {
    setHoveredDepartment(index);
  };

  const handleMouseLeave = () => {
    setHoveredDepartment(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Update isDropdownOpen based on the current path
  useEffect(() => {
    if (location.pathname === "/") {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <button
        className="md:w-72 w-full bg-bgColor text-black py-[24px] px-3 font-semibold flex items-center justify-start"
        onClick={toggleDropdown}
      >
        <Department />
        <span className="pl-2 text-link text-black">ALL DEPARTMENT</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-20 left-0 mt-2 w-72  bg-white rounded-md shadow-lg z-10">
          {departmentsData.map((department, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-[14.5px] bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-black  font-normal">
                      {department.title}
                    </p>
                  </div>
                </div>

                {department.subcategories &&
                  department.subcategories.length > 0 &&
                  (hoveredDepartment === index ? (
                    <LeftArrow />
                  ) : (
                    <RightArrow />
                  ))}
              </div>
              {hoveredDepartment === index && department.subcategories && (
                <div className="absolute top-0 left-full w-48 bg-white rounded-md shadow-lg">
                  {department.subcategories.map((subcategory, subIndex) => (
                    <Link
                      to={subcategory.path}
                      key={subIndex}
                      className="block p-2 text-sm text-black  font-normal"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
