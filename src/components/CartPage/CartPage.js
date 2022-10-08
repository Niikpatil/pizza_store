import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const CartPage = ({ cart }) => {
  const [cartItem, setCartItem] = useState(0);
  const [price, setCart] = useState(0);

  useEffect(() => {
    let item = 0;

    cart.forEach((e) => {
      item += e.qty;
    });

    setCartItem(item);
  }, [cart, cartItem, setCartItem]);

  return (
    <div>
      <h3>CartPage</h3>
      react cart
      {cart.map((selctedPizza) => (
        <ul key={selctedPizza.id}>
          <li>{selctedPizza.title} </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.pizza.cart,
});

export default connect(mapStateToProps)(CartPage);
