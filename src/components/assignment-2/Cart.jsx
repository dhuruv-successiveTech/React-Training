"use client";

import { useContext } from "react";
import { CartContext } from "@/context";

const Cart = () => {
  const { cart, AddCart, removeCart } = useContext(CartContext);

  const products = [
    { id: Date.now(), name: "Product 1", price: 10 },
    { id: Date.now(), name: "Product 2", price: 20 },
    { id: Date.now(), name: "Product 3", price: 30 },
    { id: Date.now(), name: "Product 4", price: 40 },
  ];

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <h3>{item.name}</h3>
              <p>Price: Rs{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <hr />
          <h3>
            Total: Rs
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
      )}

      <h3>Products</h3>
      {products.map((product, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <h4>{product.name}</h4>
          <p>Price: Rs {product.price}</p>
          <button onClick={() => AddCart(product)}>
            Add {product.name} to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
