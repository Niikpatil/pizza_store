import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        <Link to="">
          <h3>Pizza</h3>
        </Link>
      </div>
      <div>
        <Link to="cart">
          <h3>Cart : {cartCount} </h3>
        </Link>
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
