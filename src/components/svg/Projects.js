import { forwardRef } from "react";

function Root(props, ref) {
  return (
<svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#b3c1cf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 17.0801H15.65" stroke="#b3c1cf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.97 17.0801H6.5" stroke="#b3c1cf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 13.3201H11.97" stroke="#b3c1cf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.27 13.3201H6.5" stroke="#b3c1cf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}
const Projects = forwardRef(Root);
export default Projects;
