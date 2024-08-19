import React, { useState } from "react";

import { Link } from "react-router-dom";
import LeftArrow from "../../../../components/svg/LeftArrow";
import RightArrow from "../../../../components/svg/RightArrow";
import Department from "../../../../components/svg/Department";


const departments = [
  {
    title: 'Electronics',
    subcategories: [
      { name: 'Mobile Phones', path: '/electronics/mobile-phones' },
      { name: 'Laptops', path: '/electronics/laptops' },
      { name: 'Cameras', path: '/electronics/cameras' },
    ],
  },
  {
    title: 'Home & Kitchen',
    subcategories: [
      { name: 'Furniture', path: '/home-kitchen/furniture' },
      { name: 'Appliances', path: '/home-kitchen/appliances' },
      { name: 'Decor', path: '/home-kitchen/decor' },
    ],
  },
  {
    title: 'Western woman',

  },
];


export default function CategoryDropDown() {

  const [hoveredDepartment, setHoveredDepartment] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleMouseEnter = (index) => {
    setHoveredDepartment(index);
  };

  const handleMouseLeave = () => {
    setHoveredDepartment(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
  <div className="relative">
      <button
        className="md:w-64 w-full bg-bgColor text-black py-[24px] px-3 font-semibold flex items-center justify-start"
        onClick={toggleDropdown}
      >
        <Department />
        <span className="pl-2 text-link text-black">ALL DEPARTMENT</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-20 left-0 mt-2 w-64  bg-white rounded-md shadow-lg z-10">
          {departments.map((department, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-3 bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-between">
                {department.title}
                {department.subcategories && department.subcategories.length > 0 && (
                  hoveredDepartment === index ? <LeftArrow /> : <RightArrow />
                )}
              </div>
              {hoveredDepartment === index && department.subcategories && (
                <div className="absolute top-0 left-full w-48 bg-white rounded-md shadow-lg">
                  {department.subcategories.map((subcategory, subIndex) => (
                    <Link
                      to={subcategory.path}
                      key={subIndex}
                      className="block p-2 hover:bg-gray-200 text-gray-700"
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
