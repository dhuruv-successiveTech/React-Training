"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddCart = (item) => {
    setCart((prev)=>[...prev,item]);
  };
  const removeCart = (id) => {
    return setCart((prev)=>prev.filter((item)=>item.id!=id));
  };

  return (
    <CartContext.Provider
      value={{
        setCart,
        cart,
        AddCart,
        removeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
