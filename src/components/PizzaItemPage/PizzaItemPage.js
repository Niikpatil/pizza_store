import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/pizzaActions";

import "./pizzaItem.css";

const PizzaItemPage = ({ pizzaDetail, addToCart }) => {
  return (
    <>
      <div className="pizza_card_container">
        <img src={pizzaDetail.imageURL} alt="food" width="110" height="110" />
        <div>
          <p>{pizzaDetail.title}</p>
          <p>{pizzaDetail.price}</p>
          <button onClick={() => addToCart(pizzaDetail.id)}>Add Cart</button>
          <button>
            <Link to="cart">View Cart</Link>
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(PizzaItemPage);
