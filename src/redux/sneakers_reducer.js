import { sneakersApi } from "./../api/api";

const GET_ALL_SNEAKERS = "sneakers_reducer/GET_ALL_SNEAKERS";

let initialState = {
  allSneakers: null,
};

const getSneakers = (sneakersData) => ({
  type: GET_ALL_SNEAKERS,
  sneakersData,
});

export const getSneakersTh = () => async (dispatch) => {
  let data = await sneakersApi.getAllSneakers();
  dispatch(getSneakers(data.data));
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SNEAKERS:
      return {
        ...state,
        allSneakers: [...action.sneakersData],
      };
    default:
      return state;
  }
};

export default sneakersReducer;
