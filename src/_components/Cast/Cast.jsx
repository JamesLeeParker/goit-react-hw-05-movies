import { useState, useEffect } from "react";
import { getCredits } from "../../servises/api/api";
import s from "./Cast.module.scss";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCredits(id).then((credits) => setCast(credits.cast));
  }, [id]);

  return cast.map((actor) => {
    const img = `https://image.tmdb.org/t/p/w300/${actor.profile_path}`;
    return (
      <li key={actor.name} className={s.actorLi}>
        <img src={img} alt="" width={100} />
        <p>{actor.name}</p>
        <p>{actor.character}</p>
      </li>
    );
  });
};

export default Cast;
