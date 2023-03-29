import style from "./PlaceOrder.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { validation } from "./../../../../assets/validationInput/validation";

let PlaceOrder = () => {
  let [email, changeEmail] = useState("");
  let [name, changeName] = useState("");
  let [address, changeAddress] = useState("");
  let [city, changeCity] = useState("");
  let [zip, changeZip] = useState("");
  let [telephone, changeTelephone] = useState("");
  let [isOrderSuccesed, setOrderSuccesed] = useState(false);

  let [inputError, setInputError] = useState({
    email: null,
    name: null,
    address: null,
    city: null,
    zip: null,
    telephone: null,
  });

  useEffect(() => {
    setInputError({
      email: null,
      name: null,
      address: null,
      city: null,
      zip: null,
      telephone: null,
    });
  }, [email, telephone, zip, name, address, city]);

  const { t } = useTranslation();

  let handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let name = e.target.name.value;
    let address = e.target.address.value;
    let city = e.target.city.value;
    let zip = e.target.zip.value;
    let telephone = e.target.telephone.value;

    validation.email(email, setInputError);
    validation.name(name, setInputError);
    validation.address(address, setInputError);
    validation.city(city, setInputError);
    validation.zip(zip, setInputError);
    telephone && validation.telephone(telephone, setInputError);
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
        <div className={style.inputBlock}>
          <label>* {t("placeOrderSection.email")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={email}
            name={"email"}
            placeholder={t("placeOrderSection.emailPlaceholrer")}
            onChange={(e) => changeEmail(e.target.value)}
          />
          {inputError.email && (
            <span className={style.error}>{inputError.email}</span>
          )}
        </div>
        <div className={style.inputBlock}>
          <label>* {t("placeOrderSection.name")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={name}
            name={"name"}
            placeholder={t("placeOrderSection.namePlaceholrer")}
            onChange={(e) => changeName(e.target.value)}
          />
          {inputError.name && (
            <span className={style.error}>{inputError.name}</span>
          )}
        </div>
        <div className={style.inputBlock}>
          <label>* {t("placeOrderSection.address")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={address}
            name={"address"}
            placeholder={t("placeOrderSection.addressPlaceholrer")}
            onChange={(e) => changeAddress(e.target.value)}
          />
          {inputError.address && (
            <span className={style.error}>{inputError.address}</span>
          )}
        </div>
        <div className={style.inputBlock}>
          <label>* {t("placeOrderSection.city")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={city}
            name={"city"}
            placeholder={t("placeOrderSection.cityPlaceholrer")}
            onChange={(e) => changeCity(e.target.value)}
          />
          {inputError.city && (
            <span className={style.error}>{inputError.city}</span>
          )}
        </div>
        <div className={style.inputBlock}>
          <label>* {t("placeOrderSection.zip")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={zip}
            name={"zip"}
            placeholder={t("placeOrderSection.zipPlaceholrer")}
            onChange={(e) => changeZip(e.target.value)}
          />
          {inputError.zip && (
            <span className={style.error}>{inputError.zip}</span>
          )}
        </div>
        <div className={style.inputBlock}>
          <label>{t("placeOrderSection.telephone")}</label>
          <input
            type="text"
            className={style.yearInput}
            value={telephone}
            name={"telephone"}
            placeholder={t("placeOrderSection.telephonePlaceholrer")}
            onChange={(e) => changeTelephone(e.target.value)}
          />
          {inputError.telephone && (
            <span className={style.error}>{inputError.telephone}</span>
          )}
        </div>
        <div className={style.confirmButton}>
          <button>{t("placeOrderSection.makeOrderBTN")}</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
