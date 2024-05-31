import Header from "./Header";
import useCurPlayingMovies from "../hooks/useCurPlayingMovies";
const Browse = () => {
  useCurPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
