import { useEffect, useState, lazy, Suspense } from "react";
import {
  useParams,
  useLocation,
  NavLink,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import s from "./Movie.module.scss";
import { getMovieById } from "../../servises/api/api";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName: "Cast__page" */)
);

const Review = lazy(() =>
  import("../Review/Review" /* webpackChunkName: "Review__page" */)
);

const Movie = () => {
  const [movie, setMovie] = useState({});
  console.log("✈️ ~ movie", movie);
  const [localStorageValue, setLocalStorageValue] = useState("");
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const img = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  const genresList = movie.genres?.map((item) => item.name).join(", ");

  const hendleGoBack = () => {
    history.push(location.state.from);
  };

  useEffect(() => {
    getMovieById(params.id).then((film) => setMovie(film));
  }, [params]);

  return (
    <>
      <div>
        <button onClick={hendleGoBack}>Go back</button>
        <div className={s.paperMovie}>
          <img src={img} alt="" />
          <div className={s.movieDescr}>
            <p>
              {movie.title}({new Date(movie.release_date).getFullYear()})
            </p>
            <p>User score: {movie.vote_average * 10}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres: </p>
            <p>{genresList}</p>
          </div>
        </div>
        <NavLink
          className={s.linkCast}
          to={{
            pathname: `/movie/${params.id}/cast`,
            state: {
              from: location.state.from,
            },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `/movie/${params.id}/review`,
            state: {
              from: location.state.from,
            },
          }}
        >
          Review
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/movie/:id/cast">
            <ul className={s.cast}>
              <Cast id={params.id} />
            </ul>
          </Route>
          <Route path="/movie/:id/review">
            <ul>
              <Review id={params.id} />
            </ul>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Movie;
