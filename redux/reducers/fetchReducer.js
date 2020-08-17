import { FETCH_DATA } from "../actions/fetchAction";

const initialState = {
  bpi: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        bpi: action.payload.bpi,
      };
  }
};
