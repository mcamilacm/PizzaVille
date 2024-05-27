import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PizzaProvider from "./context/PizzaContext";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Pizzas from "./views/Pizza";


function App() {
  return (
    <PizzaProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </PizzaProvider>
  );
}

export default App;