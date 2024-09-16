import React, { useState } from "react";
import SellingProductCards from "./SellingProductCards";

export default function SellingProductsImages() {
  const [activeTab, setActiveTab] = useState("best sellers");
  const tabs = [
    "best sellers",
    "featured",
    "hot sell",
    "trend"
  ];

  return (
    <div>
 <div>
      <div className="flex justify-center mt-12">
        <div className="flex gap-12 bg-productBg py-5 px-14 rounded-[100px]">
          {tabs.map((tab) => (
            <p
              key={tab}
              className={`text-link text-productColor font-bold uppercase cursor-pointer ${
                activeTab === tab ? "text-loginBg" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>
    </div>

    <div>
      <SellingProductCards></SellingProductCards>
    </div>
    </div>
  );
}
