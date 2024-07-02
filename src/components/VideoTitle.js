import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r  from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="py-4 w-1/3 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black px-10 py-3 text-lg  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 mx-2 text-white px-5 py-3 text-lg bg-opacity-70 rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
