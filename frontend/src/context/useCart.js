import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const removeFromCart = (book) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: book });
  };

  return { cart, addToCart, removeFromCart };
};
