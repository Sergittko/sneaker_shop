import style from "./SneakerCard.module.scss";
import plus from "../../../../../img/icons/plus.svg";
import heart from "../../../../../img/icons/heart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import ContentLoader from "react-content-loader";

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
      {!image ? (
        <ContentLoader
          speed={2}
          width={"100%"}
          height={"100%"}
          viewBox="0 0 176 233"
          backgroundColor="#818181"
          foregroundColor="#bababa"
        >
          <rect x="0" y="0" rx="5" ry="5" width="174" height="124" />
          <rect x="0" y="154" rx="2" ry="2" width="58" height="13" />
          <rect x="0" y="172" rx="2" ry="2" width="174" height="18" />
          <rect x="0" y="192" rx="2" ry="2" width="174" height="18" />
          <rect x="0" y="214" rx="2" ry="2" width="36" height="16" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SneakerCard;
