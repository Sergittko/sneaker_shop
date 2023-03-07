import style from "./EmptyCart.module.scss";
import { useTranslation } from "react-i18next";
import box from "../../../../img/emptyBox.png";

let EmptyCart = () => {
  const { t } = useTranslation();

  return (
    <div className={style.emptyCartContainer}>
      <h2>{t("cartSection.emptyCart")}</h2>
      <div className={style.boxImage}>
        <img src={box} alt="" />
      </div>
    </div>
  );
};

export default EmptyCart;
