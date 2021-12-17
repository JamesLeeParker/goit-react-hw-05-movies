const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = "e42f3747a8cb96d4213f5c68d4f3aee3";

const getTrendMovies = () => {
  return fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=e42f3747a8cb96d4213f5c68d4f3aee3"
  ).then((res) => res.json());
};

const getSearchMovies = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());
};

const getMovieById = async (movieId) => {
  const response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { getTrendMovies, getSearchMovies, getMovieById };
