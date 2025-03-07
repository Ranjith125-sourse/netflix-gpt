import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

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
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName, photoURL} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  //Unsubscribe when component is unmount
  return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-3 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
      />
      {user && 
      <div className="py-5 flex">
        <img
          className="w-9 rounded-full"
          alt="User icon"
          src={user?.photoURL}
        />
        <button
          className="border-2 mx-3 border-red-600 px-2 rounded-lg text-white"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
