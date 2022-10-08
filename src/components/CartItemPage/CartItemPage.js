import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/pizzaActions";

const CartItemPage = ({ selctedPizza, removeFromCart }) => {
  return (
    <>
      <h3>CartItemPage</h3>
      <p>{selctedPizza.title}</p>
      <p>{selctedPizza.description}</p>
      <p>{selctedPizza.price}</p>
      <button onClick={() => removeFromCart(selctedPizza.id)}>Remove</button>
      <hr />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemPage);
