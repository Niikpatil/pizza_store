import { INCREMENT, DECREMENT } from "../constants/pizzaTypes";

const addPizza = (itemId) => {
  return {
    type: INCREMENT,
    payload: {
      id: itemId,
    },
  };
};

const eatPizza = (itemId) => {
  return {
    type: DECREMENT,
    payload: {
      id: itemId,
    },
  };
};

export { addPizza, eatPizza };
