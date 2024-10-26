// useOrder.jsx
import { useContext } from "react";
import { OrderContext } from "./orderProvider";

export function useOrder() {
  return useContext(OrderContext);
}
