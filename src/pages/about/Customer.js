import React from "react";
import CustomerSlider from "./CustomerSlider";

export default function Customer() {
  return (
    <div>
      <div className="text-center pb-6 mt-8">
        <p className="text-loginColor  text-sm uppercase font-bold">
          Our testimonial
        </p>
        <h2 className="lg:text-4xl text-2xl  font-bold  text-header   uppercase pt-1">
          happy customer quotes
        </h2>
      </div>

      <div className="py-{40px}">
        <CustomerSlider></CustomerSlider>
      </div>
    </div>
  );
}
