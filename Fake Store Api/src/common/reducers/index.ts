import productReducer from "./productReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  shop: productReducer,
});

export default rootReducer;
