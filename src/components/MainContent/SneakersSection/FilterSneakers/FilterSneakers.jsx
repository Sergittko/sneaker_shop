import style from "./FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
let FilterSneakers = () => {
  const { t } = useTranslation();
  return (
    <aside className={style.filterContainer}>
      <h3>{t("sneakersSection.filterSneakers.filterTitle")}</h3>
      <div>{t("sneakersSection.filterSneakers.model")}</div>
      <div>{t("sneakersSection.filterSneakers.brand")}</div>
      <div>{t("sneakersSection.filterSneakers.men")}</div>
      <div>{t("sneakersSection.filterSneakers.women")}</div>
      <div>{t("sneakersSection.filterSneakers.price")}</div>
      <div>{t("sneakersSection.filterSneakers.color")}</div>
      <div>{t("sneakersSection.filterSneakers.year")}</div>
    </aside>
  );
};

export default FilterSneakers;
