import { connect } from "react-redux";
import { addToCartTh } from "../../../../redux/cart_reducer";
import SneakersPage from "./SneakersPage";

let SneakerPageContainer = (props) => {
  return (
    <SneakersPage addToCart={props.addToCartTh} staffPics={props.staffPics} />
  );
};

let mapStateToProps = (state) => {
  return { staffPics: state.main.staffPics };
};

SneakerPageContainer = connect(mapStateToProps, {
  addToCartTh,
})(SneakerPageContainer);

export default SneakerPageContainer;
