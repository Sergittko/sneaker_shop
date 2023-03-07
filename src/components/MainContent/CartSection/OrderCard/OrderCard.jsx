import style from "./OrderCard.module.scss";
import arrow from "../../../../img/icons/caret.svg";
import { ReactComponent as TrashIcon } from "../../../../img/icons/trash.svg";
import trashIcon from "../../../../img/icons/trash.svg";
import loader from "../../../../img/preloader/loading.gif";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

let OrderCard = ({
  name,
  image,
  price,
  srcSet,
  size,
  deleteItem,
  id,
  total,
  setQuantinyTh,
}) => {
  let [quantity, changeQuantity] = useState(total);
  let [deleteOrder, setDeleteOrder] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (quantity !== total) {
      setQuantinyTh(id, {
        total: quantity,
      });
    }
  }, [quantity]);

  return (
    <div
      className={classNames(
        style.orderContainer,
        deleteOrder && style.lowOpacity
      )}
    >
      <div className={style.information}>
        <img src={image} alt="sneakers" srcSet={srcSet} />
        <div className={style.text}>
          <h2>{name}</h2>
          <p>
            {t("cartSection.size")} {size} US
          </p>
        </div>
      </div>
      <div className={style.techInfo}>
        <p className={style.price}>${price}.00</p>
        <div className={style.quantity}>
          <img
            src={arrow}
            className={style.quantityArrow}
            alt="up"
            onClick={() =>
              quantity < 9 ? changeQuantity(quantity + 1) : changeQuantity(1)
            }
          />
          <input
            type="text"
            name="quantity"
            value={quantity}
            disabled={true}
            onChange={() => changeQuantity(quantity + 1)}
          />
          {quantity !== total && (
            <img src={loader} alt="loader" className={style.quantityLoader} />
          )}
          <img
            src={arrow}
            className={style.quantityArrow}
            alt="down"
            style={{ transform: "rotate(180deg)" }}
            onClick={() =>
              quantity === 1 ? quantity : changeQuantity(quantity - 1)
            }
          />
        </div>
        <button
          onClick={() => {
            deleteItem(id);
            setDeleteOrder(true);
          }}
          className={classNames(
            style.deleteButton,
            deleteOrder && style.isDeleted
          )}
        >
          <TrashIcon className={style.trashIcon} />
          <img src={loader} alt="loader" className={style.loader} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
