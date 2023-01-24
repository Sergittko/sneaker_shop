import style from "./SneakersResult.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SneakerCard from "./SneakerCard/SneakerCard";

let SneakersResult = () => {
  const { t } = useTranslation();
  const [option, changeOption] = useState("A");
  let handleChange = (e) => {
    changeOption(e.target.value);
  };
  return (
    <div className={style.allSneakers}>
      <div className={style.sneakersSettings}>
        <h3>{t("sneakersSection.sneakersResult.resultsTitle")}</h3>
        <div className={style.select}>
          <label forhtml="sneakersOption">
            {t("sneakersSection.sneakersResult.sort.sotrBy")}
          </label>
          <select
            name="sneakersOption"
            value={option}
            onChange={(e) => handleChange(e)}
          >
            <option value="Relevance">
              {t("sneakersSection.sneakersResult.sort.relevance")}
            </option>
            <option value="Low">
              {t("sneakersSection.sneakersResult.sort.low")}
            </option>
            <option value="High">
              {t("sneakersSection.sneakersResult.sort.high")}
            </option>
            <option value="Newest">
              {t("sneakersSection.sneakersResult.sort.newest")}
            </option>
            <option value="Trending">
              {t("sneakersSection.sneakersResult.sort.trending")}
            </option>
          </select>
        </div>
      </div>

      <div className={style.sneakerCards}>
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </div>
    </div>
  );
};

export default SneakersResult;
