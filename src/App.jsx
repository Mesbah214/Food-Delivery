import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

import "./App.css";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartHandler = () => {
    setCartShown((prevState) => !prevState);
  };

  return (
    <CartContextProvider>
      {cartShown && <Cart onCartClose={cartHandler} />}
      <Header onCartShow={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
