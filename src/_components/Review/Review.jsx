import { useState, useEffect } from "react";
import { getReviews } from "../../servises/api/api";

const Review = ({ id }) => {
  const [descr, setDescr] = useState([]);
  console.log(descr);
  useEffect(() => {
    getReviews(id).then((res) => setDescr(res.results));
  }, [id]);

  return descr.map((item) => {
    return (
      <li key={item.author}>
        <h3>Author:{item.author}</h3>
        <p>{item.content}</p>
      </li>
    );
  });
};

export default Review;
