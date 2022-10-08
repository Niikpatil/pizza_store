import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, quantityCart } from "../../redux/actions/pizzaActions";

const CartItemPage = ({ selctedPizza, removeFromCart, quantityCart }) => {
  const [itemQt, setItemQt] = useState(selctedPizza.qty);

  const onChangeHandler = (e) => {
    setItemQt(e.target.value);
    quantityCart(selctedPizza.id, e.target.value);
  };

  return (
    <>
      <img src={selctedPizza.imageURL} alt="food" width="80" height="80" />

      <p>{selctedPizza.title}</p>
      <p>{selctedPizza.description}</p>
      <p>{selctedPizza.price}</p>
      <input
        type="number"
        // id="qty"
        name="qty"
        min="1"
        max="7"
        size="2"
        value={itemQt}
        onChange={onChangeHandler}
      />
      <button onClick={() => removeFromCart(selctedPizza.id)}>Remove</button>
      <hr />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantityCart: (id, value) => dispatch(quantityCart(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemPage);
