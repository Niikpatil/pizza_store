import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import PizzaPage from "../PizzaPage/PizzaPage";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;
