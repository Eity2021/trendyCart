import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
        stroke="#ff6000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1101 13.6501L13.6901 10.0601"
        stroke="#ff6000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FastDelivery = forwardRef(Root);
export default FastDelivery;
