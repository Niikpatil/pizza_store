import React from "react";
import { connect, useDispatch } from "react-redux";
import { addPizza, eatPizza } from "../../redux/actions/pizzaActions";

const PizzaItemPage = ({ pizzaDetail }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{pizzaDetail.title}</p>
      <p>{pizzaDetail.price}</p>
      <div>
        <button onClick={() => dispatch(eatPizza(pizzaDetail.id))}>-</button>{" "}
        <button onClick={() => dispatch(addPizza(pizzaDetail.id))}>+</button>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     // pizzaList: state.pizza.pizzaList,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: (id) => dispatch(addPizza(id)),
    eatPizza: () => dispatch(eatPizza()),
  };
};

export default connect(mapDispatchToProps)(PizzaItemPage);
