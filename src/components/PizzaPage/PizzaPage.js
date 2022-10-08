import React from "react";
import { connect } from "react-redux";
import PizzaItemPage from "../PizzaItemPage/PizzaItemPage";

const PizzaPage = ({ pizzaList }) => {
  return (
    <>
      <h3>PizzaPage: </h3>
      {pizzaList.map((pizzaDetail) => (
        <PizzaItemPage pizzaDetail={pizzaDetail} key={pizzaDetail.id} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizza.pizzaList,
  };
};

export default connect(mapStateToProps)(PizzaPage);
