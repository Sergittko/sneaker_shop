import style from "../../FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import classNames from "classnames";

let SizeFilter = ({ setFilterData, clearFilters }) => {
  const { t } = useTranslation();
  let [filterMode, changeFilterMode] = useState(false);
  let [filter, changeFilter] = useState({
    3.5: false,
    4: false,
    4.5: false,
    5: false,
    5.5: false,
    6: false,
    6.5: false,
    7: false,
    7.5: false,
    8: false,
    8.5: false,
    9: false,
    9.5: false,
    10: false,
    10.5: false,
    11: false,
    11.5: false,
    12: false,
    12.5: false,
    13: false,
    13.5: false,
    14: false,
    14.5: false,
    15: false,
    15.5: false,
    16: false,
  });

  useEffect(() => {
    clearFilters &&
      changeFilter((prev) => ({
        ...prev,
        3.5: false,
        4: false,
        4.5: false,
        5: false,
        5.5: false,
        6: false,
        6.5: false,
        7: false,
        7.5: false,
        8: false,
        8.5: false,
        9: false,
        9.5: false,
        10: false,
        10.5: false,
        11: false,
        11.5: false,
        12: false,
        12.5: false,
        13: false,
        13.5: false,
        14: false,
        14.5: false,
        15: false,
        15.5: false,
        16: false,
      }));
  }, [clearFilters]);

  useEffect(() => {
    let checkFilter = [];
    Object.keys(filter).forEach(
      (item) => !!filter[item] && checkFilter.push(+item)
    );
    setFilterData((filters) => {
      return { ...filters, size: checkFilter };
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
        {t("sneakersSection.filterSneakers.sizes")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        <ul>
          {Object.keys(filter)
            .sort((a, b) => a - b)
            .map((item) => {
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
                  <label htmlFor={item}>{item} US</label>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SizeFilter;
