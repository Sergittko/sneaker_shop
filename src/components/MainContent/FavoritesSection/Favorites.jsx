import style from "./Favorites.module.scss";
import { useTranslation } from "react-i18next";
import cross from "../../../img/icons/plus.svg";
import { ReactComponent as HeartСrack } from "../../../img/icons/heartСrack.svg";
import MainCard from "./../MainSection/MainCard/MainCard";
import FavoritesCard from "./FavoritesCard";

let Favorites = ({ favorites, deleteFavorite }) => {
  const { t } = useTranslation();
  return (
    <section className={style.favoritesContainer}>
      {favorites?.length === 0 ? (
        <div className={style.emptyFavorites}>
          <h2>{t("favoriteSection.emptyFavorites")}</h2>
          <div className={style.emptyFavoritesImage}>
            <HeartСrack className={style.heartСrack} />
          </div>
        </div>
      ) : (
        <div>
          <h1>{t("favoriteSection.title")}</h1>
          <div className={style.favoriteItems}>
            {favorites &&
              favorites.map((item) => {
                return (
                  <FavoritesCard
                    key={item.image + "_" + item.name}
                    id={item.id}
                    image={item.image}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    srcset={item.srcset}
                    deleteFavorite={deleteFavorite}
                  />
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Favorites;
