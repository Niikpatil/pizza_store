import {
  ADD_CART_PIZZA,
  QUANTITY_CART_PIZZA,
  REMOVE_CART_PIZZA,
} from "../constants/pizzaTypes";
import dataPizza from "../../api/dataPizza";

const initialState = {
  pizzaList: dataPizza,
  cart: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_PIZZA:
      // Get the data from pizzaList
      const item = state.pizzaList.find(
        (plist) => plist.id === action.payload.id
      );

      // Check pizza is exist in cart items
      const inCart = state.cart.find((x) =>
        x.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((x) =>
              x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case REMOVE_CART_PIZZA:
      return {};

    case QUANTITY_CART_PIZZA:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default pizzaReducer;
