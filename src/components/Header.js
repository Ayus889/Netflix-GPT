import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    //Toogle features
    dispatch(toggleGptSearchView());
  };
  //absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between
  return (
    <div className="">
      <div className="w-screen absolute px-5 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-4">
            {showGptSearch && (
              <select
                className="my-6 mx-2 px-2 cursor-pointer bg-gray-800 text-white rounded-lg"
                onChange={handleChangeLanguage}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.indentifier} value={lang.indentifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="px-4 py-2 my-5 rounded-lg bg-purple-800 text-white"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img
              className="w-14 m-2 pt-3 pb-2 mr-2"
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
