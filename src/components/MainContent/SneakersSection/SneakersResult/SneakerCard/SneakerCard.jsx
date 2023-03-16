import style from "./SneakerCard.module.scss";
import plus from "../../../../../img/icons/plus.svg";
import heart from "../../../../../img/icons/heart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

let SneakerCard = ({
  image,
  brand,
  name,
  price,
  id,
  srcSet,
  size,
  addFavorite,
  deleteFavorite,
  inFavorites,
  favoritesId,
}) => {
  let [addMode, changeMode] = useState(inFavorites);
  let [isItemAdded, toggleAdding] = useState(inFavorites);

  let handleAddingToFavorite = () => {
    if (isItemAdded) {
      deleteFavorite(favoritesId);
    }
    if (!isItemAdded) {
      addFavorite({
        image,
        brand,
        name,
        price,
        id,
        srcSet,
        size,
        favoriteId: id,
      });
    }
    toggleAdding(!isItemAdded);
  };

  return (
    <div
      className={style.cardContainer}
      onMouseOver={() => changeMode(true)}
      onMouseOut={() => (isItemAdded ? changeMode(true) : changeMode(false))}
      data-id={id}
    >
      <div className={style.imageContainer}>
        <Link
          to={`${id}`}
          state={{ image, brand, name, price, id, srcSet, size }}
        >
          <img alt={name} src={image} srcSet={srcSet} />
        </Link>
      </div>
      <div>
        <span className={style.brand}>{brand}</span>
        <Link
          to={`${id}`}
          state={{ image, brand, name, price, id, srcSet, size }}
        >
          <h4 className={style.name}>{name}</h4>
        </Link>
        <span className={style.price}>${price}</span>
      </div>
      <div className={style.addToCart}>
        {isMobile || addMode ? (
          <button onClick={() => handleAddingToFavorite()}>
            <img
              className={isItemAdded ? style.check : null}
              src={isItemAdded ? heart : plus}
              alt=""
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SneakerCard;
