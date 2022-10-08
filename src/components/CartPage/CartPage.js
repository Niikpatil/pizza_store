import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItemPage from "../CartItemPage/CartItemPage";

const CartPage = ({ cart }) => {
  const [cartItem, setCartItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let item = 0;
    let price = 0;

    cart.forEach((e) => {
      item += e.qty;
      item += e.qty * e.price;
    });

    setCartItem(item);
    setTotalAmount(price);
  }, [cart, cartItem, setCartItem, totalAmount, setTotalAmount]);

  return (
    <div>
      <h3>CartPage</h3>
      react cart
      {cart.map((selctedPizza) => (
        <CartItemPage selctedPizza={selctedPizza} keys={selctedPizza.id} />
      ))}
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.pizza.cart,
});

export default connect(mapStateToProps)(CartPage);
