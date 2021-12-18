import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { getTrendMovies } from "../../servises/api/api";

const GalleryItem = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendMovies().then((res) => setFilms(res.results));
  }, []);

  return films.map((item) => {
    if (item.title)
      return (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/movie/${item.id}`,
              state: {
                from: location,
                id: item.id,
              },
            }}
          >
            <h2>{item.title}</h2>
          </Link>
        </li>
      );
  });
};

export default GalleryItem;
