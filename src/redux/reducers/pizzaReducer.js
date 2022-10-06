import { INCREMENT, DECREMENT } from "../constants/pizzaTypes";
import dataPizza from "../../api/dataPizza";

const initialState = {
  pizzaList: dataPizza,
  numOfPizza: 10,
};

const pizzaReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        numOfPizza: state.numOfPizza + 1,
      };

    case DECREMENT:
      return {
        ...state,
        numOfPizza: state.numOfPizza - 1,
      };

    default:
      return state;
  }
};

export default pizzaReducer;
