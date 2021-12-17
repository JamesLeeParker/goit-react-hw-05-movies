import { useEffect, useState } from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { getMovieById } from "../../servises/api/api";

const Movie = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const location = useLocation();
  const genresList = movie.genres?.map((item) => item.name).join(", ");

  useEffect(() => {
    return getMovieById(params.id).then((film) => setMovie(film));
  }, [params]);
  const img = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  return (
    <div>
      <img src={img} alt="" />
      <p>{movie.title}</p>
      <p>{genresList}</p>
    </div>
  );
};

export default Movie;
