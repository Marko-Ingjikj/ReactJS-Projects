import { ADD_TO_CART, FETCH_DATA } from "../const/actions.const";

export const fetchData = (data: Array<object>) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const addToCart = (data: object) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
