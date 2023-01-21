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
        <h3>Results</h3>
        <div className={style.select}>
          <label forhtml="sneakersOption">Sort By:</label>
          <select
            name="sneakersOption"
            value={option}
            onChange={(e) => handleChange(e)}
          >
            <option value="Relevance">Relevance</option>
            <option value="Low">Price Low</option>
            <option value="High">Price High</option>
            <option value="Newest">Newest</option>
            <option value="Trending">Trending</option>
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
