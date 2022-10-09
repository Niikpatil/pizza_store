import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItemPage from "../CartItemPage/CartItemPage";
// import "./cartPage.css";

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
    <>
      <div className="cart_container">
        <div className="cart_item">
          {cart.length === 0 ? (
            <h3>Oops ! Cart is Empty</h3>
          ) : (
            cart.map((selctedPizza) => (
              <CartItemPage
                selctedPizza={selctedPizza}
                keys={selctedPizza.id}
              />
            ))
          )}
        </div>
        <div className="cart_item">
          <div className="table-responsive-sm">
            <table className="table shadow-sm">
              <thead className="table-light">
                <tr>
                  <th colspan="2">Recipt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Product Items
                    <p>
                      <small className="text-muted">asd</small>
                    </p>
                  </td>
                  <td>{cartItem}</td>
                </tr>
                <tr>
                  <td>
                    Discount
                    <p>
                      <small className="text-muted">Mega offer</small>
                    </p>
                  </td>
                  <td>₹ - 65</td>
                </tr>
                <tr>
                  <td>MRP</td>
                  <td>₹ {totalAmount}</td>
                </tr>
                <tr>
                  <td>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b className="text-danger">₹ {totalAmount - 65}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.pizza.cart,
});

export default connect(mapStateToProps)(CartPage);
