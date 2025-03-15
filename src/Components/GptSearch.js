import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggession from "./GptMovieSuggession";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_IMAGE} alt="BackgroundImage" />
      </div>
      <div className="w-screen ">
        <GptSearchBar />
        <GptMovieSuggession />
      </div>
    </>
  );
};

export default GptSearch;
