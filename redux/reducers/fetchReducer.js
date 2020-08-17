import { FETCH_DATA } from "../actions/fetchAction";

const initialState = {
  bpi: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        bpi: action.payload.bpi,
      };
    default:
      return state;
  }
};

export default fetchReducer;
