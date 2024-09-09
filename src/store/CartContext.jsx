import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {}
});

function cardReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // ... update the state to add a new item
  }

  if (action.type === 'REMOVE_ITEM') {
    // ... update the state to remove an item
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer();

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;