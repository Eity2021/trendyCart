import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";
import Logout from "../../../components/svg/Logout";

export default function Profile({ user }) {
  
  const {user_image ,name} = user;
  // console.log("user", user);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMainProfile = () => {
    navigate("/profile");
  };

  const logOut = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem('auth');
    navigate("/login" , { replace: true });
  };

  return (
    <div className="relative inline-block text-left">
      <div className="avatar" onClick={toggleDropdown}>
        <div className="w-8 rounded-full cursor-pointer shadow-xl">
          <img
            src={user_image}
            alt="Avatar"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-200 ease-out transform  z-50 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div>
            <div className="flex justify-between px-4 py-4">
              <div className="flex gap-2">
                <div className="avatar">
                  <div className="w-8 rounded-full shadow-xl">
                    <img src={user_image} alt="avatar"/>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-text-paragraph">
                    {name}
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={logOut}
              >
                <Logout></Logout>
              </div>
            </div>
          </div>
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
              onClick={handleMainProfile}
              className="block px-4 py-2  text-text-paragraph hover:bg-gray-100 text-medium"
              role="menuitem"
            >
              Profile
            </p>
            <a
              href="#"
              className="block px-4 py-2 text-medium text-text-paragraph  hover:bg-gray-100"
              role="menuitem"
            >
              Settings
            </a>
            <p
              onClick={logOut}
              className="block px-4 py-2 text-medium text-text-paragraph hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
