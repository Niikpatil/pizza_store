import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, eatPizza } from "../../redux/actions/pizzaActions";

const PizzaItemPage = () => {
  const numOfPizza = useSelector((state) => state.pizza.numOfPizza);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>PizzaPage</h3>
      <div>
        <button onClick={() => dispatch(eatPizza())}>-</button>
        <h4>Pizza count: {numOfPizza}</h4>
        <button onClick={() => dispatch(addPizza())}>+</button>
      </div>
    </div>
  );
};

export default PizzaItemPage;
