import { Switch, Route, useParams } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Header from "../_components/Header/Header";
import s from "./App.scss";

const Gallery = lazy(() =>
  import(
    "../_components/Gallery/Gallery" /* webpackChunkName: "Gallery__page" */
  )
);

const SearchMovies = lazy(() =>
  import(
    "../_components/SearchMovies/SearchMovies" /* webpackChunkName: "SearchMovies__page" */
  )
);

const Movie = lazy(() =>
  import("../_components/Movie/Movie" /* webpackChunkName: "Movie__page" */)
);

const App = () => {
  //   const params = useParams();
  //   console.log(params);
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/movie">
            <SearchMovies />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </Suspense>
    </main>
  );
};

export default App;
