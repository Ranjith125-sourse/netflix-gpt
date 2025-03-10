import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Components/MovieList";

const GptMovieSuggession = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null; //try to add Shimmer

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-xl">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggession;
