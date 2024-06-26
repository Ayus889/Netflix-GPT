import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when componenets unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="">
      <div
        className="absolute z-10 flex w-full flex-row items-center justify-between bg-gradient-
    to-b from-black px-3 md:flex-row"
      >
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-4">
            <img
              className="w-12 rounded-xl pr-2"
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
    </div>
  );
};

export default Header;
