import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="w-screen p-6 pl-12">
      <h1 className="text-3xl text-gray-400 pb-4">{title}</h1>
      <div className="flex overflow-auto overflow-x-scroll scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
