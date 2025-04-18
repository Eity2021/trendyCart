import { forwardRef } from "react";

function Root(props, ref) {
  return (
<svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.23926 10.3914C4.25367 6.15077 7.70302 2.72477 11.9436 2.73918C16.1842 2.75359 19.6102 6.20294 19.5958 10.4435V10.5305C19.5436 13.287 18.0045 15.8348 16.1175 17.8261C15.0384 18.9468 13.8333 19.9389 12.5262 20.7827C12.1767 21.085 11.6583 21.085 11.3088 20.7827C9.36033 19.5144 7.65019 17.9132 6.25665 16.0522C5.01461 14.4294 4.30942 12.4598 4.23926 10.4174L4.23926 10.3914Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="11.9174" cy="10.5392" r="2.46087" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
}
const Location = forwardRef(Root);
export default Location;
