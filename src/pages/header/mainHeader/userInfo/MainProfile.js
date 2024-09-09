import React from 'react'
import { useSelector } from "react-redux";
export default function MainProfile() {
    const {user} = useSelector((state) => state.auth) || {} ;
    console.log('user',user);
  return (
    <div>MainProfile</div>
  )
}
