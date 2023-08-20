import {
  ADD_TO_CART,
  CLEAR_CART,
  FETCH_DATA,
  REMOVE_FROM_CART,
} from "../const/actions.const";

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

export const removeFromCart = (data: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
