import { ADD_CART_PIZZA, REMOVE_CART_PIZZA } from "../constants/pizzaTypes";
import dataPizza from "../../api/dataPizza";

const initialState = {
  pizzaList: dataPizza,
  cart: [],
  // numOfPizza: 10,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_PIZZA:
      return {};

    case REMOVE_CART_PIZZA:
      return {};

    default:
      return state;
  }
};

export default pizzaReducer;
