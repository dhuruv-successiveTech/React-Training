"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface cartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: cartItem[];
  AddCart: (item: cartItem) => void;
  removeCart: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<cartItem[]>([]);

  const AddCart = (item: cartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id == item.id);
      if (existingItem) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id == id);
      if (!existing) {
        return prev;
      }
      if (existing.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter((item) => item.id != id);
      }
    }); // Filter out item by id
  };

  return (
    <CartContext.Provider value={{ cart, AddCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = ():CartContextProps=>{
   const context = useContext(CartContext);
    if (!context) {
      throw new Error("context not found for cart");
    }
    return context;
}