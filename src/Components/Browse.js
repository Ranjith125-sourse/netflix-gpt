import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="flex justify-between">
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
