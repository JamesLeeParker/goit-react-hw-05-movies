import { Switch, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "../_components/Gallery/Gallery";
import SearchMovies from "../_components/SearchMovies/SearchMovies";
import Header from "../_components/Header/Header";
import Movie from "../_components/Movie/Movie";

const App = () => {
  //   const params = useParams();
  //   console.log(params);
  return (
    <main>
      <Header />
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
    </main>
  );
};

export default App;
