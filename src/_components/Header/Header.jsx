import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/movie"}>Movie</NavLink>
    </>
  );
};

export default Header;
