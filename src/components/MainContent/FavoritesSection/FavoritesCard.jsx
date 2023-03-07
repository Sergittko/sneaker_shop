import style from "./Favorites.module.scss";
import cross from "../../../img/icons/plus.svg";
import MainCard from "./../MainSection/MainCard/MainCard";
import { useState } from "react";
import loader from "../../../img/preloader/loading.gif";

let FavoritesCard = ({
  id,
  image,
  brand,
  name,
  price,
  size,
  srcset,
  deleteFavorite,
}) => {
  let [isDeleted, setDeleteStatys] = useState(false);

  return (
    <div className={style.favoriteCard}>
      <MainCard
        id={id}
        image={image}
        brand={brand}
        name={name}
        price={price}
        size={size}
        srcset={srcset}
      />
      <button
        onClick={() => {
          deleteFavorite(id);
          setDeleteStatys(true);
        }}
        className={isDeleted ? style.isDeleted : null}
      >
        <img src={cross} alt="cross" className={style.cross} />
        <img src={loader} alt="loader" className={style.loader} />
      </button>
    </div>
  );
};

export default FavoritesCard;
