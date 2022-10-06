import { INCREMENT, DECREMENT } from "../constants/pizzaTypes";

const addPizza = () => {
  return {
    type: INCREMENT,
  };
};

const eatPizza = () => {
  return {
    type: DECREMENT,
  };
};

export { addPizza, eatPizza };
