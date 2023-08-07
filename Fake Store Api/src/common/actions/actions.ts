import { FETCH_DATA } from "../const/actions.const";

export const fetchData = (data: Array<object>) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};
