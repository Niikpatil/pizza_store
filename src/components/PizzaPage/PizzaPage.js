import React from "react";
import { connect } from "react-redux";
// import { addPizza, eatPizza } from "../../redux/actions/pizzaActions";
import Header from "../Layouts/Header";
import PizzaItemPage from "../PizzaItemPage/PizzaItemPage";

const PizzaPage = ({ pizzaList }) => {
  return (
    <>
      <Header />

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
    numOfPizza: state.pizza.numOfPizza,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPizza: () => dispatch(addPizza()),
//     eatPizza: () => dispatch(eatPizza()),
//   };
// };

export default connect(mapStateToProps)(PizzaPage);
