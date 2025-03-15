import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidation(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: {USER_AVATAR},
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth?.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log("updated form"+auth.currentUser);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="h-screen object-cover md:w-screen"
          src={BG_IMAGE}
          alt="BackgroundImage"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white w-full md:w-3/12 absolute bg-black p-12 mt-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full 
            Name"
            className="p-2 my-3 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-600 text-center font-bold">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-center"
          onClick={() => toggleSignInForm()}
        >
          {isSignInForm
            ? "New to netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
