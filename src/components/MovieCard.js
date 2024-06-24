import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
//import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 pr-2 ">
      <img alt="movie-card" src={IMG_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
