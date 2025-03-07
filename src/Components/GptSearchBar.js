import React from "react";
import lang from "../utils/languageContants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store?.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md bg-opacity-50">
        <input
          type="text"
          className="p-4 m-4 rounded-md col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-green-300 px-4 py-2 rounded-md col-span-3 m-4 text-xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
