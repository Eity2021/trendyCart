import React from "react";
import MyAccount from "./MyAccount";
import LoginForm from "./LoginForm";
import Exclusive from "./exclusive/Exclusive";

export default function Login() {
  return (
    <div>
      <MyAccount></MyAccount>
      <LoginForm></LoginForm>
      <Exclusive></Exclusive>
    </div>
  );
}
