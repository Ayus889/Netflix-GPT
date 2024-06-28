import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 bg-opacity-70">
        <input
          type="text"
          placeholder="What you like to watch today?"
          className="m-4 p-4 col-span-9 rounded-md"
        />
        <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
