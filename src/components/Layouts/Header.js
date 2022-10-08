import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((ct) => {
      count += ct.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <header className="Header_wrapper">
      <div>
        <h3>Pizza</h3>
      </div>
      <div>
        <h3>Cart : {cartCount} </h3>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizza.cart,
  };
};
export default connect(mapStateToProps)(Header);
