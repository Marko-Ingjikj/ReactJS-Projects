import { ADD_TO_CART, FETCH_DATA } from "../const/actions.const";

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

    default:
      return state;
  }
};

export default productReducer;
