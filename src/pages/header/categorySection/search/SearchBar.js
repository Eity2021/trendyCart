import React, { useState } from "react";
import Search from "../../../../components/svg/Search";
export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="sm:flex hidden items-center justify-center sm:pr-3 sm:pl-3">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full  px-4  py-2 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-none  rounded-l-[40px]  placeholder:text-sm  placeholder:font-normal"
        placeholder="Search for your item's type..."
      />
      <button className="px-8 py-2 bg-bgColor text-white rounded-r-[40px] hover:bg-bgColor">
        <Search></Search>
      </button>
    </div>
  );
}
