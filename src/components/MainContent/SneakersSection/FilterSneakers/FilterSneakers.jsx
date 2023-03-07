import style from "./FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import ModelFilter from "./Filters/ModelFilter/ModelFilter";
import SizeFilter from "./Filters/SizeFilter/SizeFilter";
import BrandFilter from "./Filters/BrandFilter/BrandFilter";
import PriceFilter from "./Filters/PriceFilter/PriceFilter";
import YearFilter from "./Filters/YearFilter/YearFilter";
import { ReactComponent as ChevroneUp } from "../../../../img/icons/circleChevronUp.svg";
import { Link as ScrollLink } from "react-scroll";

let FilterSneakers = ({ setFilterData }) => {
  const { t } = useTranslation();
  return (
    <aside className={style.filterWrapper}>
      <div>
        <h3>{t("sneakersSection.filterSneakers.filterTitle")}</h3>
        <ModelFilter setFilterData={setFilterData} />
        <BrandFilter setFilterData={setFilterData} />
        <SizeFilter setFilterData={setFilterData} />
        <PriceFilter setFilterData={setFilterData} />
        <YearFilter setFilterData={setFilterData} />
      </div>

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
    </aside>
  );
};

export default FilterSneakers;
