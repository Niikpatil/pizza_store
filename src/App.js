import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/Layouts/HomePage";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
