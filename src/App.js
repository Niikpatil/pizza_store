import { Provider } from "react-redux";
import store from "./redux/store";
import PizzaPage from "./components/PizzaPage/PizzaPage";
// import "./App.css";

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
