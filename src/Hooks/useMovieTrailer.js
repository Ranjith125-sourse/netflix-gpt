import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store?.movie?.trailerVideo)

  // fetching the trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const movieTrailer =
      filterData.length > 0 ? filterData[0] : json.results[0];
    // console.log(movieTrailer);
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    if (!trailerVideo && movieId) {
      getMovieVideos();
    }
  }, [movieId, trailerVideo, dispatch]);
};

export default useMovieTrailer;
