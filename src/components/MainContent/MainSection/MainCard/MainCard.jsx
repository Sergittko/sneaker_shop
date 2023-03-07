import style from "./MainCard.module.scss";
import { Link } from "react-router-dom";

let MainCard = ({ id, image, brand, name, price, srcSet, size }) => {
  return (
    <div className={style.sneakersCard}>
      <Link
        to={`/sneakers/${id}`}
        state={{ image, brand, name, price, id, srcSet, size }}
      >
        <div className={style.imageContainer}>
          <img src={image} alt={name} srcSet={srcSet} />
        </div>
        <span className={style.brand}>{brand}</span>
        <h4 className={style.name}>{name}</h4>
      </Link>
    </div>
  );
};

export default MainCard;
