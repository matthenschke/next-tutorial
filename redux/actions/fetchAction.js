import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

export const fetchData = () => async (dispatch) => {
  const { data } = await axios.get(
    '"https://api.coindesk.com/v1/bpi/currentprice.json"'
  );
  dispatch({ type: FETCH_DATA, payload: data });
};
