"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart,AddCart,removeCart} = useContext(CartContext);
   
  return(
    <div >
        <button onClick={()=>AddCart({id:"12",name:"Mansahib",age:22})}> add</button>
        <button onClick={()=>removeCart("12")}> delete</button>
        <h1>{console.log(cart)}
        </h1>
    </div>
  );
};

export default Cart;
