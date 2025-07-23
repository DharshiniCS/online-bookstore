// CartContext.js
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
  const exists = state.cart.find((item) => item._id === action.payload._id);
  if (exists) return state;
  return {
    ...state,
    cart: [...state.cart, action.payload],
  };


   
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
