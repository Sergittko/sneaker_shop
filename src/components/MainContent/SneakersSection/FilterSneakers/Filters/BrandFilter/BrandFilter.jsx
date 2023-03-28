import style from "../../FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import classNames from "classnames";

let BrandFilter = ({ setFilterData, clearFilters }) => {
  const { t } = useTranslation();
  let [filterMode, changeFilterMode] = useState(false);
  let [filter, changeFilter] = useState({
    nike: false,
    adidas: false,
    airJordan: false,
    bape: false,
  });
  let brands = {
    nike: "Nike",
    adidas: "adidas",
    airJordan: "Air Jordan",
    bape: "BAPE",
  };

  useEffect(() => {
    clearFilters &&
      changeFilter((prev) => ({
        ...prev,
        nike: false,
        adidas: false,
        airJordan: false,
        bape: false,
      }));
  }, [clearFilters]);

  useEffect(() => {
    let checkFilter = [];
    Object.keys(filter).forEach(
      (item) => !!filter[item] && checkFilter.push(brands[item])
    );
    setFilterData((filters) => {
      return { ...filters, brand: checkFilter };
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
        {t("sneakersSection.filterSneakers.brand")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        <ul>
          {Object.keys(brands).map((item) => {
            return (
              <li key={item}>
                <input
                  id={brands[item]}
                  type="checkbox"
                  name={brands[item]}
                  checked={filter[item]}
                  onChange={() => {
                    changeFilter((prev) => ({
                      ...prev,
                      [item]: !filter[item],
                    }));
                  }}
                />
                <label htmlFor={brands[item]}>{brands[item]}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BrandFilter;
