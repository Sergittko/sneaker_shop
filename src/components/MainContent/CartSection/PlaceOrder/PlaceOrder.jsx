import style from "./PlaceOrder.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

let PlaceOrder = () => {
  let [email, changeEmail] = useState("");
  let [name, changeName] = useState("");
  let [address, changeAddress] = useState("");
  let [city, changeCity] = useState("");
  let [zip, changeZip] = useState("");
  let [telephone, changeTelephone] = useState("");
  const { t } = useTranslation();

  let handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let name = e.target.name.value;
    let address = e.target.address.value;
    let city = e.target.city.value;
    let zip = e.target.zip.value;
    let telephone = e.target.telephone.value;
    console.log({ email, name, address, city, zip, telephone });
  };

  return (
    <div className={style.orderSummary}>
      <h2>SHIPPING INFORMATION</h2>
      <form className={style.userInformation} onSubmit={(e) => handleSubmit(e)}>
        <label>* Your Email Address</label>
        <input
          type="text"
          className={style.yearInput}
          value={email}
          name={"email"}
          placeholder="email"
          onChange={(e) => changeEmail(e.target.value)}
        />
        <label>* Full Name</label>
        <input
          type="text"
          className={style.yearInput}
          value={name}
          name={"name"}
          placeholder="name"
          onChange={(e) => changeName(e.target.value)}
        />
        <label>* Street Address</label>
        <input
          type="text"
          className={style.yearInput}
          value={address}
          name={"address"}
          placeholder="address"
          onChange={(e) => changeAddress(e.target.value)}
        />
        <label>* City</label>
        <input
          type="text"
          className={style.yearInput}
          value={city}
          name={"city"}
          placeholder="city"
          onChange={(e) => changeCity(e.target.value)}
        />
        <label>* Zip / Postal Code</label>
        <input
          type="text"
          className={style.yearInput}
          value={zip}
          name={"zip"}
          placeholder="zip"
          onChange={(e) => changeZip(e.target.value)}
        />
        <label>Telephone</label>
        <input
          type="text"
          className={style.yearInput}
          value={telephone}
          name={"telephone"}
          placeholder="phone number"
          onChange={(e) => changeTelephone(e.target.value)}
        />
        <div className={style.confirmButton}>
          <button>Make order</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
