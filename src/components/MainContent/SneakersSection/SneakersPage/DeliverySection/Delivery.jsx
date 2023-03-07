import { useTranslation } from "react-i18next";
import style from "./Delivery.module.scss";
import { useState } from "react";
import classNames from "classnames";

let Delivery = () => {
  let [isBlockOpened, changeBlockOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={style.delivery}>
      <div
        onClick={() => {
          changeBlockOpened(!isBlockOpened);
        }}
        className={style.deliveryTitle}
      >
        {t("sneakerPage.delivery.title")}
      </div>
      <div
        className={classNames(
          style.deliveryInfo,
          isBlockOpened ? style.showDeliveryInfo : null
        )}
      >
        <h5>{t("sneakerPage.delivery.cancelations")}</h5>
        <p>{t("sneakerPage.delivery.cancelationsDescription1")}</p>
        <p>{t("sneakerPage.delivery.cancelationsDescription2")}</p>
        <h5>{t("sneakerPage.delivery.delivery")}</h5>
        <p>{t("sneakerPage.delivery.deliveryDescription1")}</p>
        <p>{t("sneakerPage.delivery.deliveryDescription2")}</p>
        <p>{t("sneakerPage.delivery.deliveryDescription3")}</p>
        <h5>{t("sneakerPage.delivery.returns")}</h5>
        <p>{t("sneakerPage.delivery.returnsDescription1")}</p>
        <p>{t("sneakerPage.delivery.returnsDescription2")}</p>
      </div>
    </div>
  );
};

export default Delivery;
