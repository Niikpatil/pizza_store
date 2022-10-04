import React from "react";
import { connect } from "react-redux";
import { addPizza } from "../../redux/actions/pizzaActions";

const PizzaPage = ({ numOfPizza, addPizza }) => {
  return (
    <div>
      <h3>PizzaPage</h3>
      <h4>Pizza count: {numOfPizza}</h4>
      <button onClick={addPizza}>Buy Pizza</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPizza: state.pizza.numOfPizza,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: () => dispatch(addPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
