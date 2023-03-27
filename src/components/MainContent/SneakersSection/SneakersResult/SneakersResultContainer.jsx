import SneakersResult from "./SneakersResult";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getSneakersTh } from "./../../../../redux/sneakers_reducer";
import {
  addFavoriteTh,
  deleteFavoriteTh,
} from "../../../../redux/cart_reducer";
import { filtersApi } from "./../../../common/FiltersApi/FiltersApi";
import loader from "../../../../img/preloader/loading.gif";

let SneakersResultContainer = (props) => {
  useEffect(() => {
    props.getSneakersTh();
  }, []);

  let newData =
    props.data && filtersApi.filterByBrand(props.filtersData.brand, props.data);
  newData = newData && filtersApi.filterByYear(props.filtersData.year, newData);
  newData = newData && filtersApi.filterBySize(props.filtersData.size, newData);
  newData =
    newData && filtersApi.filterByPrice(props.filtersData.price, newData);
  newData =
    newData && filtersApi.filterByModel(props.filtersData.model, newData);
  return (
    <div
      id="sneakerResultContainer"
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      {!!props.data !== false ? (
        <div style={{ height: "inherit" }}>
          <SneakersResult
            sneakersData={newData}
            favorites={props.favorites}
            addFavorite={props.addFavoriteTh}
            deleteFavorite={props.deleteFavoriteTh}
          />
        </div>
      ) : (
        <img
          src={loader}
          alt="loader"
          style={{
            position: window.innerWidth < 760 ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "300px",
            bottom: 0,
            right: 0,
            margin: "auto",
            display: "block",
          }}
        />
      )}
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    data: state.sneakers.allSneakers,
    favorites: state.cart.favorites,
  };
};

SneakersResultContainer = connect(mapStateToProps, {
  getSneakersTh,
  addFavoriteTh,
  deleteFavoriteTh,
})(SneakersResultContainer);

export default SneakersResultContainer;
