import React from "react";
import { connect } from "react-redux";
import { addPizza, eatPizza } from "../../redux/actions/pizzaActions";

const PizzaPage = ({ pizzaList, numOfPizza }) => {
  const pizza = pizzaList.map((p) => (
    <ul>
      <li> {p.title} </li>
    </ul>
  ));

  return (
    <div>
      <h3>PizzaPage</h3>
      <div>
        <h3>{pizza}</h3>
        <button onClick={eatPizza}>-</button>
        <h4>Pizza count: {numOfPizza}</h4>
        <button onClick={addPizza}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizza.pizzaList,
    numOfPizza: state.pizza.numOfPizza,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: () => dispatch(addPizza()),
    eatPizza: () => dispatch(eatPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
