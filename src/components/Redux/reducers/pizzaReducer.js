import { Add_Pizza } from "../constants/PizzaTypes";

const initialState = { numOfPizza: 10 };

const pizzReducer = (state = initialState, { type }) => {
  switch (type) {
    case Add_Pizza:
      return { ...state, numOfPizza: state.numOfPizza + 1 };

    default:
      return state;
  }
};

export default pizzReducer;
