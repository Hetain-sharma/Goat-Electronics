import { useContext } from "react";
import { CartContext } from "./cartProvider";

export function useCart() {
  return useContext(CartContext);
}
