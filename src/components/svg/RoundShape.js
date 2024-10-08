import { forwardRef } from "react";

function Root(props, ref) {
  return (
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.01001 14.5101C8.19001 14.8101 8.41 15.0901 8.66 15.3401C10.5 17.1801 13.49 17.1801 15.34 15.3401C16.09 14.5901 16.52 13.64 16.66 12.67" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.34 11.3301C7.48 10.3501 7.91 9.41003 8.66 8.66003C10.5 6.82003 13.49 6.82003 15.34 8.66003C15.6 8.92003 15.81 9.20005 15.99 9.49005" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.82001 17.18V14.51H10.49" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.18 6.82007V9.49005H13.51" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


  );
}
const RoundShape = forwardRef(Root);
export default RoundShape;
