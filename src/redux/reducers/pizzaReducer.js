import { INCREMENT, DECREMENT } from "../constants/pizzaTypes";
import dataPizza from "../../api/dataPizza";

const initialState = {
  pizzaList: dataPizza,
  cart: [],
  numOfPizza: 10,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const item = state.pizzaList.find(
        (plist) => plist.id === action.payload.id
      );

      return {
        ...state,
        cart: [...state.cart, item],
        // cart: [...state.cart, {action.payload}],
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
