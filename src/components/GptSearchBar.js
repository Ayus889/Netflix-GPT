import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import genAI from "../utils/geminiai";
import { API_OPTION } from "../utils/constant";
import { addGenMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchGenMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get the Movie result
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a Movie Recommendation sysytem and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: gadar, koi mil gaya, golmaal, don, bol bachan ";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // Andaz Apna Apna, Chalti Ka Naam Gaadi, Padosan, Chupke Chupke, Angoor

    const genMovies = text.split(","); // This will give me array of genAI movie

    // [Andaz Apna Apna, Chalti Ka Naam Gaadi, Padosan, Chupke Chupke, Angoor]

    // For each movie I will search for TMDB API
    const promiseArray = genMovies.map((movie) => searchGenMovieTMDB(movie));

    const tmdbSearchResults = await Promise.all(promiseArray);
    console.log(tmdbSearchResults);

    dispatch(
      addGenMovieResult({
        movieNames: genMovies,
        movieResults: tmdbSearchResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptsearchplaceholder}
          className="m-4 p-4 col-span-9 rounded-md"
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
