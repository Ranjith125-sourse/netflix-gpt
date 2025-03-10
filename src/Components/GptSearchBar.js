import React, { useRef } from "react";
import lang from "../utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);


  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an api call to open ai and get movie results
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Kalki, Bahubali, KGF, RRR, Temper";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices)
      //create error page here

      console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); //gives me array of list

    // console.log(gptMovieList);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResult = await Promise.all(promiseArray);

      console.log(tmdbResult);

      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResult}));
    

    searchText.current.value = "";
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-md bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-md col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-green-300 px-4 py-2 rounded-md col-span-3 m-4 text-xl"
          onClick={() => handleGptSearchClick()}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
