import style from "./YearFilter.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import classNames from "classnames";

let YearFilter = ({ setFilterData, clearFilters }) => {
  let [filterMode, changeFilterMode] = useState(false);
  let [errorMessage, showError] = useState(false);
  let [inputFrom, changeInputFrom] = useState(1994);
  let [inputTo, changeInputTo] = useState(2023);
  const { t } = useTranslation();

  useEffect(() => {
    clearFilters && changeInputFrom(1994);
    clearFilters && changeInputTo(2023);
    applyYear();
  }, [clearFilters]);

  let applyYear = () => {
    if (inputFrom > inputTo) {
      return showError(t("sneakersSection.filterErrors.yearBiggerLower"));
    }
    if (inputFrom > 2023 || inputTo > 2023) {
      return showError(t("sneakersSection.filterErrors.yearBigger"));
    }
    if (inputFrom < 1994 || inputTo < 1994) {
      return showError(t("sneakersSection.filterErrors.yearLower"));
    }

    showError(false);
    setFilterData((filters) => {
      return { ...filters, year: { from: +inputFrom, to: +inputTo } };
    });
  };

  return (
    <div className={style.filterContainer}>
      <div
        className={style.filterTitle}
        onClick={() => {
          changeFilterMode(!filterMode);
        }}
      >
        {t("sneakersSection.filterSneakers.year")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        {errorMessage && (
          <div className={style.filterError}>
            <span>{errorMessage}</span>
          </div>
        )}

        <label>{t("sneakersSection.from")}</label>
        <input
          className={style.yearInput}
          min="1994"
          max="2023"
          type="number"
          value={inputFrom}
          onChange={(e) => changeInputFrom(e.target.value)}
        />
        <label>{t("sneakersSection.to")}</label>
        <input
          className={style.yearInput}
          value={inputTo}
          min="1994"
          max="2023"
          onChange={(e) => changeInputTo(e.target.value)}
          type="number"
        />
        <button className={style.applyButton} onClick={() => applyYear()}>
          {t("sneakersSection.apply")}
        </button>
      </div>
    </div>
  );
};

export default YearFilter;
