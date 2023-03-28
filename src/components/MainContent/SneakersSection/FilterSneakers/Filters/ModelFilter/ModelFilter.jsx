import style from "../../FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import classNames from "classnames";

let ModelFilter = ({ setFilterData, clearFilters }) => {
  const { t } = useTranslation();
  let [filterMode, changeFilterMode] = useState(false);
  let [filter, changeFilter] = useState({
    "Air Force 1": false,
    "Air Jordan 1": false,
    "Air Max 90": false,
    Blazer: false,
    "Chuck 70": false,
    "Chuck Taylor All Star": false,
    Dunk: false,
    "NMD Runner": false,
    Superstar: false,
    UltraBoost: false,
  });

  useEffect(() => {
    clearFilters &&
      changeFilter((prev) => ({
        ...prev,
        "Air Force 1": false,
        "Air Jordan 1": false,
        "Air Max 90": false,
        Blazer: false,
        "Chuck 70": false,
        "Chuck Taylor All Star": false,
        Dunk: false,
        "NMD Runner": false,
        Superstar: false,
        UltraBoost: false,
      }));
  }, [clearFilters]);

  useEffect(() => {
    let checkFilter = [];
    Object.keys(filter).forEach(
      (item) => !!filter[item] && checkFilter.push(item)
    );
    setFilterData((filters) => {
      return { ...filters, model: checkFilter };
    });
  }, [filter]);

  return (
    <div className={style.filterContainer}>
      <div
        className={style.filterTitle}
        onClick={() => {
          changeFilterMode(!filterMode);
        }}
      >
        {t("sneakersSection.filterSneakers.model")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        <ul>
          {Object.keys(filter).map((item) => {
            return (
              <li key={item}>
                <input
                  id={item}
                  type="checkbox"
                  name={item}
                  checked={filter[item]}
                  onChange={() =>
                    changeFilter((prev) => ({
                      ...prev,
                      [item]: !filter[item],
                    }))
                  }
                />
                <label htmlFor={item}>{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ModelFilter;
