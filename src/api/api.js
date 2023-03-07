import axios from "axios";

const instance = axios.create({
  baseURL: "https://63bd839d18bc301c026b31a9.mockapi.io/",
});

const mainInstance = axios.create({
  baseURL: "https://63e0f6da59bb472a742d31c4.mockapi.io/",
});

export const sneakersApi = {
  getAllSneakers() {
    return instance.get("sneakersData");
  },
};

export const cartApi = {
  getCartOrder() {
    return instance.get("cart");
  },

  addToCart(order) {
    return instance.post("cart", order);
  },

  setItemQuantiny(id, total) {
    return instance.put("cart/" + id, total);
  },

  deleteFromCart(id) {
    return instance.delete("cart/" + id);
  },
};

export const mainApi = {
  getStaffPics() {
    return mainInstance.get("mainStaffPics");
  },
};

export const favoritesApi = {
  getFavorites() {
    return mainInstance.get("favorites");
  },
  addFavorite(data) {
    return mainInstance.post("favorites", data);
  },
  deleteFavorite(id) {
    return mainInstance.delete("favorites/" + id);
  },
};
