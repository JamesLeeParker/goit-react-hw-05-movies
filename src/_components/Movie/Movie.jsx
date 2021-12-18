import { useEffect, useState, lazy, Suspense } from "react";
import {
  useParams,
  useLocation,
  NavLink,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { getMovieById } from "../../servises/api/api";
// import Cast from "../Cast/Cast";
// import Review from "../Review/Review";

const Cast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName: "Cast__page" */)
);

const Review = lazy(() =>
  import("../Review/Review" /* webpackChunkName: "Review__page" */)
);

const Movie = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const history = useHistory();
  const params = useParams();
  console.log("✈️ ~ params", params);
  const location = useLocation();
  console.log("✈️ ~ location", location);

  const genresList = movie.genres?.map((item) => item.name).join(", ");
  const hendleGoBack = () => {
    history.push(location.state.from);
  };

  useEffect(() => {
    getMovieById(params.id).then((film) => setMovie(film));
  }, [params]);
  const img = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  return (
    <>
      <div>
        <button onClick={hendleGoBack}>Go back</button>
        <img src={img} alt="" />
        <p>{movie.title}</p>
        <p>{genresList}</p>
        {/* <NavLink to={`/movie/${params.id}/cast`}>Cast</NavLink> */}
        <NavLink
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
            <Cast id={params.id} />
          </Route>
          <Route path="/movie/:id/review">
            <Review id={params.id} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Movie;
