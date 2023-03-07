import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import style from "./SneakersPage.module.scss";
import { useState } from "react";
import Delivery from "./DeliverySection/Delivery";
import Recommended from "./RecommendedSection/Recommended";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

let SneakersPage = ({ addToCart, staffPics }) => {
  const { t } = useTranslation();
  let { state } = useLocation();
  let [selectedSize, setSize] = useState(null);
  let [isItemAdded, setItemAdded] = useState(false);
  let addToCartHandler = (state, size) => {
    let data = { ...state, size, total: 1 };
    addToCart(data);
  };

  let sizesArray = [
    "3.5",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "14.5",
    "15",
    "15.5",
  ];

  return (
    <div className={style.pageContainer}>
      <div className={style.sneakerContainer}>
        <div className={style.sneakerImage}>
          <img src={state.image} srcSet={state.srcSet} alt={state.name} />
        </div>
        <div className={style.sneakerInfo}>
          <h2>{state.brand}</h2>
          <h1>{state.name}</h1>
          <div className={style.price}>
            <span>${state.price}</span>
          </div>
          <span className={style.size}>{t("sneakerPage.size")} us</span>

          <div
            className={style.sizePicker}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            onClick={() => {
              setItemAdded(false);
            }}
          >
            {sizesArray.map((size) => {
              let isDisabled = !state?.size.includes(+size);
              return (
                <label
                  key={size}
                  className={classNames(
                    selectedSize === size ? style.checked : null,
                    isDisabled ? style.disabled : null
                  )}
                >
                  <input
                    type="radio"
                    required={true}
                    value={size}
                    name="sizePicker"
                    disabled={isDisabled}
                  />
                  <span>{size}</span>
                </label>
              );
            })}
          </div>

          <div className={style.buttonContainer}>
            {isItemAdded ? (
              <NavLink to="/cart">
                <button className={style.goToCartButton}>
                  {t("sneakerPage.goToCart")}
                </button>
              </NavLink>
            ) : (
              <button
                className={style.buyButton}
                onClick={() => {
                  (selectedSize &&
                    (addToCartHandler(state, +selectedSize) ||
                      setItemAdded(true))) ||
                    setSize(null);
                }}
              >
                {t("sneakerPage.buy")} ${state.price}
              </button>
            )}
            {isItemAdded && (
              <span
                className={style.addedToCartSpan}
                onClick={() => {
                  setItemAdded(false);
                }}
              >
                {t("sneakerPage.addedToCart")}
              </span>
            )}
          </div>

          <Delivery />
        </div>
      </div>
      {staffPics && <Recommended staffPics={staffPics} />}
    </div>
  );
};

export default SneakersPage;
