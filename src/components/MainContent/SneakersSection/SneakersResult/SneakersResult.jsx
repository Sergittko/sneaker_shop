import style from "./SneakersResult.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SneakerCard from "./SneakerCard/SneakerCard";
import { sortSneakersData } from "../../../common/FiltersApi/FiltersApi";
import arrow from "../../../../img/icons/arrow.svg";
import { Link as ScrollLink } from "react-scroll";

let SneakersResult = (props) => {
  const { t } = useTranslation();
  const [option, changeOption] = useState("Relevance");
  const [showItems, setShowItems] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => setCurrentPage(1), [props.sneakersData]);
  let changeSortBy = (e) => {
    changeOption(e.target.value);
    setCurrentPage(1);
  };

  let setItemsOnPage = (e) => {
    setShowItems(e.target.value);
    setCurrentPage(1);
  };

  let sortedSneakersData = sortSneakersData(props.sneakersData, option);

  let tatalPages = Math.ceil(sortedSneakersData.length / showItems);
  let pagination = () => {
    let paginatedArray = [];
    let max = currentPage * showItems;
    let min = max - showItems;
    for (let i = min; i < max; i++) {
      sortedSneakersData[i] && paginatedArray.push(sortedSneakersData[i]);
    }
    return paginatedArray;
  };
  let currentPageData = pagination();

  return (
    <div className={style.allSneakers}>
      <div className={style.sneakersSettings}>
        <h3>
          {t("sneakersSection.sneakersResult.resultsTitle") +
            " " +
            sortedSneakersData.length}
        </h3>
        <div className={style.selectsContainer}>
          <div className={style.select}>
            <label forhtml="sneakersOption">
              {t("sneakersSection.sneakersResult.show")}:
            </label>
            <select
              name="sneakersOption"
              value={showItems}
              onChange={(e) => setItemsOnPage(e)}
            >
              <option value={9}>9</option>
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={60}>60</option>
              <option value={90}>90</option>
            </select>
          </div>

          <div className={style.select}>
            <label forhtml="sneakersOption">
              {t("sneakersSection.sneakersResult.sort.sotrBy")}
            </label>
            <select
              name="sneakersOption"
              value={option}
              onChange={(e) => changeSortBy(e)}
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
      </div>

      <div className={style.sneakerCards}>
        {sortedSneakersData.length === 0 ? (
          <div className={style.noItemsFound}>
            <span className={style.title}>
              {t("sneakersSection.sneakersResult.emptyText.notFound")}
            </span>
            <span className={style.subTitle}>
              {t("sneakersSection.sneakersResult.emptyText.checkFilters")}
            </span>
          </div>
        ) : (
          currentPageData.map((item) => {
            let isInFavorites;
            let favoritesId;
            props.favorites &&
              props.favorites.forEach((favItem) => {
                if (item.id === favItem.favoriteId) {
                  isInFavorites = true;
                  favoritesId = favItem.id;
                }
              });
            return (
              <SneakerCard
                key={item.id + "_" + item.name}
                image={item.imageURL}
                brand={item.brand}
                name={item.name}
                price={item.price}
                size={item.size}
                id={item.id}
                srcSet={item.srcset}
                addFavorite={props.addFavorite}
                deleteFavorite={props.deleteFavorite}
                inFavorites={isInFavorites}
                favoritesId={favoritesId}
              />
            );
          })
        )}
      </div>

      {sortedSneakersData.length > showItems ? (
        <div className={style.paginationContainer}>
          <ScrollLink
            to="sneakerResultContainer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button
              className={style.navigationButton}
              onClick={() => {
                return currentPage !== 1
                  ? setCurrentPage(currentPage - 1)
                  : currentPage;
              }}
            >
              <img
                src={arrow}
                alt="arrow"
                style={{ transform: "rotate(90deg)" }}
              />
              Back
            </button>
          </ScrollLink>
          <span>
            {currentPage} of {tatalPages}
          </span>
          <ScrollLink
            to="sneakerResultContainer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button
              className={style.navigationButton}
              onClick={() => {
                return currentPage < tatalPages
                  ? setCurrentPage(currentPage + 1)
                  : currentPage;
              }}
            >
              Next
              <img
                src={arrow}
                alt="arrow"
                style={{ transform: "rotate(270deg)" }}
              />
            </button>
          </ScrollLink>
        </div>
      ) : null}
    </div>
  );
};

export default SneakersResult;
