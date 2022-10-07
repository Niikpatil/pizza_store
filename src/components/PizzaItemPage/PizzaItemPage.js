import React from "react";
import { connect } from "react-redux";

const PizzaItemPage = ({ pizzaDetail }) => {
  return (
    <>
      <img src={pizzaDetail.imageURL} alt="food" width="128" height="128" />
      <p>{pizzaDetail.title}</p>
      <p>{pizzaDetail.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizza.pizzaList,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPizza: (id) => dispatch(addPizza(id)),
//     eatPizza: () => dispatch(eatPizza()),
//   };
// };

export default connect(mapStateToProps)(PizzaItemPage);
