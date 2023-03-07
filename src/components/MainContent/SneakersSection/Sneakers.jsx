import style from "./Sneakers.module.scss";
import { useTranslation } from "react-i18next";
import FilterSneakers from "./FilterSneakers/FilterSneakers";
import SneakersResultContainer from "./SneakersResult/SneakersResultContainer";
import { useState } from "react";

let Sneakers = () => {
  const { t } = useTranslation();
  const [filtersData, setFilterData] = useState({
    brand: [],
    size: [],
    model: [],
    price: { from: null, to: null },
    year: { from: null, to: null },
  });

  return (
    <section className={style.sneakersContainer}>
      <header className={style.sneakersHeader}>
        <h1>{t("sneakersSection.headerTitle")}</h1>
        <p>{t("sneakersSection.headerSubTitle")}</p>
      </header>
      <div className={style.sneakersSection}>
        <FilterSneakers setFilterData={setFilterData} />
        <SneakersResultContainer filtersData={filtersData} />
      </div>
    </section>
  );
};

export default Sneakers;
