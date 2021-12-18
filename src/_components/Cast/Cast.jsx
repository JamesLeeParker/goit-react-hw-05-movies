import { useState, useEffect } from "react";
import { getCredits } from "../../servises/api/api";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCredits(id).then((credits) => setCast(credits.cast));
  }, [id]);

  return cast.map((actor) => {
    const img = `https://image.tmdb.org/t/p/w300/${actor.profile_path}`;
    return (
      <li key={actor.name}>
        <img src={img} alt="" width={100} />
        <p>{actor.character}</p>
        <p>{actor.name}</p>
      </li>
    );
  });
};

export default Cast;
