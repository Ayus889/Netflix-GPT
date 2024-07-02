import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-3xl p-7 text-white ">{title}</h1>

      <div className="flex pl-7 overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
