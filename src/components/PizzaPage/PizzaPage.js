import React from "react";
import { connect } from "react-redux";
import buyPizza from "../Redux/reducers/pizzaReducer";

const PizzaPage = (props) => {
  return (
    <div>
      <h3>PizzaPage</h3>
      <h4>Pizza count: {props.buyPizza}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
