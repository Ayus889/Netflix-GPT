import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
//import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-40 pr-2 ">
      <img
        className="rounded-lg hover:scale-105"
        alt="movie-card"
        src={IMG_CDN_URL + poster}
      />
    </div>
  );
};

export default MovieCard;
