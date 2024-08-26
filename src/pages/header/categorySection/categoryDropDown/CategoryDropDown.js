import React, { useState ,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import LeftArrow from "../../../../components/svg/LeftArrow";
import RightArrow from "../../../../components/svg/RightArrow";
import Department from "../../../../components/svg/Department";
import avatar from "../../../../assets/images/header/avatar.jpg";
const departments = [
  {
    title: "Electronics",
    image: avatar,
    subcategories: [
      { name: "Mobile Phones", path: "/electronics/mobile-phones" },
      { name: "Laptops", path: "/electronics/laptops" },
      { name: "Cameras", path: "/electronics/cameras" },
    ],
  },
  {
    title: "Home & Kitchen",
    image: avatar,
    subcategories: [
      { name: "Furniture", path: "/home-kitchen/furniture" },
      { name: "Appliances", path: "/home-kitchen/appliances" },
      { name: "Decor", path: "/home-kitchen/decor" },
    ],
  },
  {
    title: "Western Woman",
    image: avatar,
    subcategories: [
      { name: "Clothing", path: "/western-woman/clothing" },
      { name: "Accessories", path: "/western-woman/accessories" },
      { name: "Footwear", path: "/western-woman/footwear" },
    ],
  },
  {
    title: "TV, Appliances",
    image: avatar,
    subcategories: [
      { name: "Television", path: "/tv-appliances/television" },
      { name: "Washing Machines", path: "/tv-appliances/washing-machines" },
      { name: "Refrigerators", path: "/tv-appliances/refrigerators" },
    ],
  },
  {
    title: "Baby Products",
    image: "path_to_baby_products_image",
    subcategories: [
      { name: "Diapers", path: "/baby-products/diapers" },
      { name: "Toys", path: "/baby-products/toys" },
      { name: "Feeding", path: "/baby-products/feeding" },
    ],
  },
  {
    title: "Grocery Products",
    image: avatar,
    subcategories: [
      { name: "Snacks", path: "/grocery-products/snacks" },
      { name: "Beverages", path: "/grocery-products/beverages" },
      { name: "Staples", path: "/grocery-products/staples" },
    ],
  },
  {
    title: "Beauty & Health Products",
    image: avatar,
    subcategories: [
      { name: "Skincare", path: "/beauty-health-products/skincare" },
      { name: "Makeup", path: "/beauty-health-products/makeup" },
      { name: "Supplements", path: "/beauty-health-products/supplements" },
    ],
  },
  {
    title: "Industrial Products",
    image: avatar,
    subcategories: [
      { name: "Machinery", path: "/industrial-products/machinery" },
      { name: "Tools", path: "/industrial-products/tools" },
      { name: "Safety Gear", path: "/industrial-products/safety-gear" },
    ],
  },

  {
    title: "Club Sports",
    image: avatar,
    subcategories: [
      { name: "Sportswear", path: "/club-sports/sportswear" },
      { name: "Equipment", path: "/club-sports/equipment" },
      { name: "Accessories", path: "/club-sports/accessories" },
    ],
  },

  {
    title: "Car & Motorbike Products",
    image: avatar,
    subcategories: [
      {
        name: "Car Accessories",
        path: "/car-motorbike-products/car-accessories",
      },
      {
        name: "Motorbike Accessories",
        path: "/car-motorbike-products/motorbike-accessories",
      },
      { name: "Spare Parts", path: "/car-motorbike-products/spare-parts" },
    ],
  },
];

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
    if (location.pathname === '/') {
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
          {departments.map((department, index) => (
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
