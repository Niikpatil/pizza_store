import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, quantityCart } from "../../redux/actions/pizzaActions";

// import "./cartItemPage.css";
import { BsTrash } from "react-icons/bs";

const CartItemPage = ({ selctedPizza, removeFromCart, quantityCart }) => {
  const [itemQt, setItemQt] = useState(selctedPizza.qty);

  const onChangeHandler = (e) => {
    setItemQt(e.target.value);
    quantityCart(selctedPizza.id, e.target.value);
  };

  return (
    <div className="cart_item_cantainer ">
      <span>
        <img src={selctedPizza.imageURL} alt="food" width="80" height="80" />
      </span>

      <small>
        <p>{selctedPizza.title}</p>
        <p className="text-muted">{selctedPizza.description}</p>
        <p className="text-danger">₹ {selctedPizza.price}</p>
      </small>
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
        <h4>
          <BsTrash onClick={() => removeFromCart(selctedPizza.id)} />
        </h4>
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
