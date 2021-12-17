import { useState, useEffect } from "react";
import s from "./Input.scss";

const Input = ({ getValue }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const heandleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getValue(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" onChange={heandleChange} />
        <button type="submit">Serch</button>
      </label>
    </form>
  );
};

export default Input;
