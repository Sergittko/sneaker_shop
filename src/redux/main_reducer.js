import { mainApi } from "./../api/api";

const GET_STAFF_PICKS = "main_reducer/GET_STAFF_PICKS";
const GET_NEW_RELEASES = "main_reducer/GET_NEW_RELEASES";

let initialState = {
  staffPics: null,
  newReleases: null,
};

const getStaffPics = (staffPics) => ({
  type: GET_STAFF_PICKS,
  staffPics,
});

const getNewReleases = (newReleases) => ({
  type: GET_NEW_RELEASES,
  newReleases,
});

export const getStaffPicsTh = () => async (dispatch) => {
  let data = await mainApi.getStaffPics();
  dispatch(getStaffPics(data.data[0].mainStaffPics));
  dispatch(getNewReleases(data.data[0].mainNewReleases));
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF_PICKS:
      return {
        ...state,
        staffPics: [...action.staffPics],
      };
    case GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: [...action.newReleases],
      };
    default:
      return state;
  }
};

export default mainReducer;
