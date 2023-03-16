import style from "./FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import ModelFilter from "./Filters/ModelFilter/ModelFilter";
import SizeFilter from "./Filters/SizeFilter/SizeFilter";
import BrandFilter from "./Filters/BrandFilter/BrandFilter";
import PriceFilter from "./Filters/PriceFilter/PriceFilter";
import YearFilter from "./Filters/YearFilter/YearFilter";
import { ReactComponent as ChevroneUp } from "../../../../img/icons/circleChevronUp.svg";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

let FilterSneakers = ({ setFilterData }) => {
  const { t } = useTranslation();
  let [showAllFilters, setShowAllFilters] = useState(false);

  return (
    <aside className={style.filterWrapper}>
      <div>
        <h3
          onClick={() =>
            window.innerWidth < 760 && setShowAllFilters(!showAllFilters)
          }
        >
          {t("sneakersSection.filterSneakers.filterTitle")}
        </h3>
        <div
          className={
            window.innerWidth < 760
              ? showAllFilters === true
                ? style.showAllFilters
                : style.hideAllFilters
              : ""
          }
        >
          <ModelFilter setFilterData={setFilterData} />
          <BrandFilter setFilterData={setFilterData} />
          <SizeFilter setFilterData={setFilterData} />
          <PriceFilter setFilterData={setFilterData} />
          <YearFilter setFilterData={setFilterData} />
        </div>
      </div>
      {window.innerWidth > 760 && (
        <div className={style.buttonUp}>
          <ScrollLink
            to="sneakerResultContainer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <ChevroneUp className={style.chevroneUp} />
          </ScrollLink>
        </div>
      )}
    </aside>
  );
};

export default FilterSneakers;
