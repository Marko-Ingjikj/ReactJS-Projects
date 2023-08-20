import {
  ADD_TO_CART,
  CLEAR_CART,
  FETCH_DATA,
  REMOVE_FROM_CART,
} from "../const/actions.const";

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id != action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default productReducer;
