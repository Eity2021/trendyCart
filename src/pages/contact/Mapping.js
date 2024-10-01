import React from "react";
import InfoMessage from './InfoMessage';
export default function Mapping() {
  return (
    <div className="my-24">
      <div className="text-center ">
        <p className="text-loginColor text-sm uppercase">LET’S TALK</p>
        <p className="text-4xl font-bold  text-header   uppercase">
          Send Us a Massage
        </p>
        <p className="text-center text-text-paragraph text-sm pt-3">
          We are always happy to talk with you. Be sure to write to us if you
          have any <br></br> questions or need help and support.
        </p>
      </div>

      <div>
        <InfoMessage></InfoMessage>
      </div>
    </div>
  );
}
