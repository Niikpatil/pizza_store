import { Provider } from "react-redux";
import store from "./redux/store";
import PizzaPage from "./components/PizzaPage/PizzaPage";
import PizzaItemPage from "./components/PizzaItemPage/PizzaItemPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PizzaPage />
        <hr />
        <PizzaItemPage />
      </div>
    </Provider>
  );
}

export default App;
