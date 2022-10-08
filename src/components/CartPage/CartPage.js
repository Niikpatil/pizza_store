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
      price += e.qty * e.price;
    });

    setCartItem(item);
    setTotalAmount(price);
  }, [cart, cartItem, setCartItem, totalAmount, setTotalAmount]);

  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <h3>Oops ! Cart is Empty</h3>
        ) : (
          cart.map((selctedPizza) => (
            <CartItemPage selctedPizza={selctedPizza} keys={selctedPizza.id} />
          ))
        )}
      </div>
      <table>
        <tr>
          <th>No of Products</th>
          <td>{cartItem}</td>
          <td> - {totalAmount}</td>
        </tr>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.pizza.cart,
});

export default connect(mapStateToProps)(CartPage);
