import { Add_Pizza } from "../constants/pizzaTypes";

const initialState = { numOfPizza: 10 };

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Pizza:
      return {
        ...state,
        numOfPizza: state.numOfPizza - 1,
      };

    default:
      return state;
  }
};

export default pizzaReducer;
