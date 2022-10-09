import React from "react";
import { connect } from "react-redux";
import PizzaItemPage from "../PizzaItemPage/PizzaItemPage";
import "../PizzaItemPage/pizzaItem.css";

const PizzaPage = ({ pizzaList }) => {
  return (
    <>
      <h3>PizzaPage: </h3>
      <div className="pizza_list_container">
        {pizzaList.map((pizzaDetail) => (
          <PizzaItemPage pizzaDetail={pizzaDetail} key={pizzaDetail.id} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizza.pizzaList,
  };
};

export default connect(mapStateToProps)(PizzaPage);
