import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/pizzaActions";

const PizzaItemPage = ({ pizzaDetail, addToCart }) => {
  return (
    <>
      <img src={pizzaDetail.imageURL} alt="food" width="110" height="110" />
      <div>
        <p>{pizzaDetail.title}</p>
        <p>{pizzaDetail.price}</p>
        <button onClick={() => addToCart(pizzaDetail.id)}>add</button>
      </div>
      <hr />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(PizzaItemPage);
