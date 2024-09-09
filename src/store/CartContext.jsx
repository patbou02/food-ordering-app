import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {}
});

function cardReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // ... update the state to add a new item
    // 1. check if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    // 2. create a copy of the items array
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      // item already exists in the cart
      // 3. update the quantity of the existing item
      const existingItem = state.item[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
      // 4. update the items array with the updated item
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // no item in the cart yet
      // 3. add the new item to the items array
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    // 5. return the updated state
    return { ...state, items: updatedItems };
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