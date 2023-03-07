import { ReactComponent as Heart } from "../../img/icons/heart.svg";
import style from "./FavoriteItems.module.scss";
import { NavLink } from "react-router-dom";

let FavoriteItems = () => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? style.active : undefined)}
      to="/favorites"
    >
      <div className={style.favoritesContainer}>
        <Heart width="18" height="18" className={style.favoritesIcon} />
      </div>
    </NavLink>
  );
};

export default FavoriteItems;
