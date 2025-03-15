import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold mb-10 transition-all duration-500 ease-in-out hover:-translate-y-4 hover:text-8xl">{title}</h1>
      <p className="hidden md:inline-block w-1/3 mb-10 ">{overview}</p>
      <div className="flex gap-6 mb-10 w-1/3 ">
        <button className="text-lg px-3 md:px-8 py-1 md:py-2 rounded-md bg-white text-black hover:opacity-70">
          ▷ Play
        </button>
        <button className="hidden md:inline-block text-lg bg-gray-500 px-5 py-1 rounded-md bg-opacity-50 hover:opacity-70">
        ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
