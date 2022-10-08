import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/pizzaActions";

const PizzaItemPage = ({ pizzaDetail, addToCart, removeFromCart }) => {
  return (
    <>
      <img src={pizzaDetail.imageURL} alt="food" width="110" height="110" />
      <div>
        <p>{pizzaDetail.title}</p>
        <p>{pizzaDetail.price}</p>
        <button onClick={() => addToCart(pizzaDetail.id)}>Add Cart</button>
        <button>
          <Link to="cart">View Cart</Link>
        </button>
      </div>
      <hr />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(PizzaItemPage);
