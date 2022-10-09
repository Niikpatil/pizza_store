import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

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
    <header className="Header_wrapper ">
      <div className="navbar navbar-light ">
        <Link to="/" className=" navbar-brand">
          Delicious Pizza
        </Link>
      </div>

      <div>
        <Link to="cart">
          <i className="position-relative">
            <BsFillCartCheckFill />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          </i>
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
