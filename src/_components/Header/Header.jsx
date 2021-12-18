import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink
        className={s.navLink}
        exact
        to={"/"}
        activeClassName={s.selected}
      >
        Home
      </NavLink>
      <NavLink className={s.navLink} to={"/movie"} activeClassName={s.selected}>
        Movie
      </NavLink>
    </div>
  );
};

export default Header;
