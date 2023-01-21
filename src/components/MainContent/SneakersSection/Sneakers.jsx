import style from "./Sneakers.module.scss";
import { useTranslation } from "react-i18next";
import FilterSneakers from "./FilterSneakers/FilterSneakers";
import SneakersResult from "./SneakersResult/SneakersResult";

let Sneakers = () => {
  const { t } = useTranslation();
  return (
    <section className={style.sneakersContainer}>
      <header className={style.sneakersHeader}>
        <h1>{t("sneakersSection.headerTitle")}</h1>
        <p>{t("sneakersSection.headerSubTitle")}</p>
      </header>
      <div className={style.sneakersSection}>
        <FilterSneakers />
        <SneakersResult />
      </div>
    </section>
  );
};

export default Sneakers;
