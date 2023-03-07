import style from "./Recommended.module.scss";
import MainCard from "./../../../MainSection/MainCard/MainCard";
import { useTranslation } from "react-i18next";

let Recommended = ({ staffPics }) => {
  const { t } = useTranslation();
  return (
    <div className={style.recommendedSection}>
      <div className={style.innerContainer}>
        <h2>{t("sneakerPage.recommended")}</h2>
        <div className={style.recommended}>
          {staffPics.map((item) => {
            return (
              <MainCard
                key={item.imageURL}
                id={item.id}
                image={item.imageURL}
                brand={item.brand}
                name={item.name}
                price={item.price}
                size={item.size}
                srcset={item.srcset}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
