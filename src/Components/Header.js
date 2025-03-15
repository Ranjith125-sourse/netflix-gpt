import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
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
    //Unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    //md for desktop sm for tabs default is for mobile
    <div className="absolute px-8 py-3 w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-44 mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:scale-125"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="py-5 flex justify-between">
          {showGptSearch && <select className="p-2 bg-gray-500 text-white mx-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="p-2 mx-2 bg-green-300 rounded-md"
            onClick={() => handleGptSearch()}
          >
          {!showGptSearch ? "GPT Search" : "Home"}
            
          </button>
          <img
            className="w-9 rounded-full hidden md:block"
            alt="User icon"
            src={user?.photoURL}
          />
          <button
            className="border-2 mx-3 border-red-600 px-2 rounded-lg text-white"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
