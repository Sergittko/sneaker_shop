import { cartApi, favoritesApi } from "./../api/api";

const GET_CART = "cart_reducer/GET_CART";
const DELETE_ITEM = "cart_reducer/DELETE_ITEM";
const GET_FAVORITES = "cart_reducer/GET_FAVORITES";
const ADD_TO_FAVORITE = "cart_reducer/ADD_TO_FAVORITE";

let initialState = {
  cart: null,
  favorites: null,
};

const getCart = (cartData) => ({
  type: GET_CART,
  cartData,
});

const getFavorites = (favoriteData) => ({
  type: GET_FAVORITES,
  favoriteData,
});

const addToFavorite = (newFavoriteItem) => ({
  type: ADD_TO_FAVORITE,
  newFavoriteItem,
});

// const deleteItem = (newData) => ({
//   type: DELETE_ITEM,
//   newData,
// });

export const getCartTh = () => async (dispatch) => {
  let data = await cartApi.getCartOrder();
  dispatch(getCart(data.data));
};

export const deleteItemTh = (id) => async (dispatch) => {
  await cartApi.deleteFromCart(id);
  dispatch(getCartTh());
};

export const addToCartTh = (orderData) => async (dispatch) => {
  await cartApi.addToCart(orderData);
};

export const setQuantinyTh = (id, total) => async (dispatch) => {
  await cartApi.setItemQuantiny(id, total);
  dispatch(getCartTh());
};

export const getFavoritesTh = () => async (dispatch) => {
  let data = await favoritesApi.getFavorites();
  dispatch(getFavorites(data.data));
};

export const addFavoriteTh = (sneakerData) => async (dispatch) => {
  let addedItem = await favoritesApi.addFavorite(sneakerData);
  dispatch(addToFavorite(addedItem.data));
};

export const deleteFavoriteTh = (id) => async (dispatch) => {
  await favoritesApi.deleteFavorite(id);
  dispatch(getFavoritesTh());
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: [...action.cartData],
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: [...action.favoriteData],
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.newFavoriteItem],
      };
    default:
      return state;
  }
};

export default cartReducer;
