import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const Trailer = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store?.movie?.trailerVideo);
//   console.log(trailer);
  if (!trailer || !trailer.key) {
    return <div className="text-white text-center">Loading trailer...</div>;
  }

  return (
    <div className="w-1/2 flex justify-center bg-black">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
