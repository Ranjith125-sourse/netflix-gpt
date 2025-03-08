import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies = () => {
    const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(()=> {
    getTrendingMovies()
  },[])
}

export default useTrendingMovies;