import React from 'react'

import { useGetUserQuery } from "../../../../features/user/userApi";
export default function MainProfile() {
  const { data: profileData ,isLoading,isError} = useGetUserQuery();
  let user = profileData?.data?.user;
    console.log('user',user);
  return (
    <div>MainProfile</div>
  )
}
