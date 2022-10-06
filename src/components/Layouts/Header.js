import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const inCart = useSelector((state) => state.pizza.cart);

  return (
    <header className="Header_wrapper">
      <h2>Cities</h2>
      <h2>inCart</h2>
      <h2>{inCart}</h2>
    </header>
  );
};

export default Header;
