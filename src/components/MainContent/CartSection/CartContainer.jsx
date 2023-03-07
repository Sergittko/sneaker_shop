import {
  deleteItemTh,
  getCartTh,
  setQuantinyTh,
} from "./../../../redux/cart_reducer";
import { connect } from "react-redux";
import Cart from "./Cart";
import { useEffect } from "react";

let CartContainer = (props) => {
  useEffect(() => {
    props.getCartTh();
  }, []);

  return (
    <Cart
      cartData={props.cartData}
      setQuantinyTh={props.setQuantinyTh}
      deleteItem={props.deleteItemTh}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    cartData: state.cart.cart,
  };
};

CartContainer = connect(mapStateToProps, {
  getCartTh,
  deleteItemTh,
  setQuantinyTh,
})(CartContainer);
export default CartContainer;
