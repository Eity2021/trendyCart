import React from "react";
import aboutPerson from "../../assets/images/about/aboutPerson.jpeg";
import Mission from "./Mission";
export default function OurStory() {
  return (
    <div className="xl:mx-40 lg:mx-20 md:mx-10  mx-6  py-32">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <img src={aboutPerson} alt="" className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-3xl text-black font-bold  uppercase">
            Our Story
          </h2>
          <div>
            <p className="text-medium  font-normal  text-text-paragraph  mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              indust orem Ipsum has been the industry's standard dummy texever
              since the when anunknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="mt-4  text-medium  font-normal  text-text-paragraph">
              Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="">
            <p className="text-loginColor mt-10 text-xl">
              Mission Of Our Creative House
            </p>
            <div className="border mt-4"></div>
          </div>
          <div>
            <Mission></Mission>
          </div>
        </div>
      </div>
    </div>
  );
}
