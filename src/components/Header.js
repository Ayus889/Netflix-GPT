import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen py-2 m-2 z-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src="https://shorturl.at/ghwOT" alt="logo" />
      {user && (
        <div className="flex p-4">
          <img
            className="w-12 rounded-xl"
            alt="user-icon"
            src={user?.photoURL}
          />
          <button
            className=" font-bold text-white hover:bg-gray-400 hover:rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
