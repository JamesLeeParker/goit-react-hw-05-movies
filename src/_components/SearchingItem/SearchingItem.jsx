import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSearchMovies } from "../../servises/api/api";

const SearchingItem = ({ searchingQuery }) => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  console.log("✈️ ~ location!!!!!!!!", location);

  useEffect(() => {
    if (!searchingQuery) return;
    getSearchMovies(searchingQuery).then((res) => {
      setFilms(res.results);
    });
  }, [searchingQuery]);

  return films.map((film) => {
    const img = `https://image.tmdb.org/t/p/w300/${film.poster_path}`;
    return (
      <li key={film.id}>
        <Link
          to={{
            pathname: `/movie/${film.id}`,
            state: {
              from: location,
            },
          }}
        >
          <img src={img} alt="" width="100" />
          <p>{film.title}</p>
        </Link>
      </li>
    );
  });
};

export default SearchingItem;
