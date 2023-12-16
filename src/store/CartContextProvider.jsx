import { useReducer } from "react";

import CartContext from "./cart-context";
import PropTypes from "prop-types";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item": {
      const updatedItems = state.items.concat(action.item);
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }

    case "remove_item": {
      return;
    }
  }
  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "add_item", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "remove_item", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.array,
};

export default CartContextProvider;
