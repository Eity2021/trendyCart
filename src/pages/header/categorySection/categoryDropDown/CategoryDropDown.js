import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftArrow from "../../../../components/svg/LeftArrow";
import RightArrow from "../../../../components/svg/RightArrow";
import Department from "../../../../components/svg/Department";

export default function CategoryDropDown({ categoryLists }) {

  // const categories = category?.data;
  console.log("categoryLists", categoryLists);
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
        <div className="absolute top-20 left-0 mt-2 md:w-72 w-full bg-white rounded-md shadow-lg z-10">
          {categoryLists?.map((departmentCategory, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >

              <Link  to={`categoriesDetails/${departmentCategory._id}`}> 
              <div className="p-[14.5px] bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img
                        src={departmentCategory.categories_image}
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-black  font-normal">
                      {departmentCategory.category_name}
                    </p>
                  </div>
                </div>

                {departmentCategory.subCategories &&
                  departmentCategory.subCategories.length > 0 &&
                  (hoveredDepartment === index ? (
                    <RightArrow />
                  ) : (
                   
                    <LeftArrow />
                  ))}
              </div>
         </Link>
              {hoveredDepartment === index &&
                departmentCategory.subCategories && (
                  <div className="absolute top-0 left-full w-48 bg-white rounded-md shadow-lg">
                    {departmentCategory.subCategories.map(
                      (subcategory, subIndex) => (
                        <Link
                          to={`subCategoriesDetails/${subcategory._id}`}
                          key={subIndex}
                          className="block p-2 text-sm text-black  font-normal"
                        >
                          <div className="flex gap-2">
                            <div>
                              <div className="avatar">
                                <div className="w-6 rounded-full">
                                  <img
                                    src={subcategory.subCategories_image}
                                    alt="subCategories_image"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>{subcategory.subCategory_name}</div>
                          </div>
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
