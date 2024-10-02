import { forwardRef } from "react";

function Root() {
  return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2799 20.25H16.9999C19.7599 20.25 21.9999 18.01 21.9999 15.25V8.75C21.9999 5.99 19.7599 3.75 16.9999 3.75H10.2799C8.86993 3.75 7.52993 4.34 6.57993 5.39L3.04993 9.27C1.63993 10.82 1.63993 13.18 3.04993 14.73L6.57993 18.61C7.52993 19.66 8.86993 20.25 10.2799 20.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0001 14.47L11.0601 9.53003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.0601 14.47L16.0001 9.53003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
</svg>


  );
}
const Cross = forwardRef(Root);
export default Cross;
