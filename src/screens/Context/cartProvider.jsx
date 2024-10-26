// cartProvider.jsx

import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [productId]: { ...prevCart[productId], quantity },
      }));
    }
  };

  const clearCart = () => {
    setCart({}); 
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext }; 
