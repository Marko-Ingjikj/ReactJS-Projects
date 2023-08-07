import { FETCH_DATA } from "../const/actions.const";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
