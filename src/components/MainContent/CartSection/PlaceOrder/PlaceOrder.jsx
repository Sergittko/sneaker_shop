import style from "./PlaceOrder.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom";

let PlaceOrder = () => {
  let [email, changeEmail] = useState("");
  let [name, changeName] = useState("");
  let [address, changeAddress] = useState("");
  let [city, changeCity] = useState("");
  let [zip, changeZip] = useState("");
  let [telephone, changeTelephone] = useState("");

  let [isOrderSuccesed, setOrderSuccesed] = useState(false);
  const { t } = useTranslation();

  let handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let name = e.target.name.value;
    let address = e.target.address.value;
    let city = e.target.city.value;
    let zip = e.target.zip.value;
    let telephone = e.target.telephone.value;

    if (!!email && !!name && !!address && !!city && !!zip) {
      setOrderSuccesed(true);
    }
  };

  return isOrderSuccesed ? (
    <div className={style.orderSummary}>
      <div className={style.orderConfitmedContainer}>
        <h2>{t("placeOrderSection.orderConfirmed.title")}</h2>
        <span>{t("placeOrderSection.orderConfirmed.hint")}</span>
        <div className={style.backToMain}>
          <NavLink to="/">
            {t("placeOrderSection.orderConfirmed.button")}
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <div className={style.orderSummary}>
      <h2>{t("placeOrderSection.title")}</h2>
      <form className={style.userInformation} onSubmit={(e) => handleSubmit(e)}>
        <label>* {t("placeOrderSection.email")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={email}
          name={"email"}
          placeholder={t("placeOrderSection.emailPlaceholrer")}
          onChange={(e) => changeEmail(e.target.value)}
        />
        <label>* {t("placeOrderSection.name")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={name}
          name={"name"}
          placeholder={t("placeOrderSection.namePlaceholrer")}
          onChange={(e) => changeName(e.target.value)}
        />
        <label>* {t("placeOrderSection.address")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={address}
          name={"address"}
          placeholder={t("placeOrderSection.addressPlaceholrer")}
          onChange={(e) => changeAddress(e.target.value)}
        />
        <label>* {t("placeOrderSection.city")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={city}
          name={"city"}
          placeholder={t("placeOrderSection.cityPlaceholrer")}
          onChange={(e) => changeCity(e.target.value)}
        />
        <label>* {t("placeOrderSection.zip")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={zip}
          name={"zip"}
          placeholder={t("placeOrderSection.zipPlaceholrer")}
          onChange={(e) => changeZip(e.target.value)}
        />
        <label>{t("placeOrderSection.telephone")}</label>
        <input
          type="text"
          className={style.yearInput}
          value={telephone}
          name={"telephone"}
          placeholder={t("placeOrderSection.telephonePlaceholrer")}
          onChange={(e) => changeTelephone(e.target.value)}
        />
        <div className={style.confirmButton}>
          <button>{t("placeOrderSection.makeOrderBTN")}</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
