import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import s from "./Input.scss";
import { save, get } from "../../servises/localStorage/localStorage";

const STORAGE_KEY = "searchingQuery";

const Input = ({ getValue }) => {
  const [value, setValue] = useState("");
  const location = useLocation();

  console.log("AAA", location);
  const heandleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    save(STORAGE_KEY, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getValue(value);
  };

  useEffect(() => {
    localStorage.getItem(STORAGE_KEY) !== "" && setValue(get(STORAGE_KEY));
    getValue(value);
  }, [value]);

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" value={value} onChange={heandleChange} />
        <button type="submit">Serch</button>
      </label>
    </form>
  );
};

export default Input;
