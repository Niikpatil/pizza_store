import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import PizzaPage from "./components/PizzaPage/PizzaPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PizzaPage />
      </div>
    </Provider>
  );
}

export default App;
