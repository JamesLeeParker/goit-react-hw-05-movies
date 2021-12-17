import { useState, useEffect } from "react";

import Input from "../Input/Input";
import SearchingItem from "../SearchingItem/SearchingItem";

// const heandleChange = (e) => {};

const SearchMovies = () => {
  const [query, setQuery] = useState("");

  //   const handleSubmit = (e) => {
  //     setQuery;
  //   };

  return (
    <>
      <Input getValue={setQuery} />
      <ul>
        <SearchingItem searchingQuery={query} />
      </ul>
    </>
  );
};

export default SearchMovies;
