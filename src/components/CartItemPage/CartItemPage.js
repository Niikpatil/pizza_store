import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, quantityCart } from "../../redux/actions/pizzaActions";

// import "./cartItemPage.css";

const CartItemPage = ({ selctedPizza, removeFromCart, quantityCart }) => {
  const [itemQt, setItemQt] = useState(selctedPizza.qty);

  const onChangeHandler = (e) => {
    setItemQt(e.target.value);
    quantityCart(selctedPizza.id, e.target.value);
  };

  return (
    <div class="cart_item_cantainer shadow">
      <span>
        <img src={selctedPizza.imageURL} alt="food" width="80" height="80" />
      </span>
      <span>
        <p>{selctedPizza.title}</p>
        <p>{selctedPizza.description}</p>
        <p>{selctedPizza.price}</p>
      </span>
      <span className="input">
        <p>Quantity</p>
        <p>
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
        </p>
      </span>
      <span>
        <button onClick={() => removeFromCart(selctedPizza.id)}>Remove</button>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantityCart: (id, value) => dispatch(quantityCart(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemPage);
