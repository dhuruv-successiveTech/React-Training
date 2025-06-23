"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Cart = () => {
  const { cart, AddCart, removeCart } = useContext(CartContext);

  const products = [
    { id: "1", name: "Product 1", price: 10.99 },
    { id: "2", name: "Product 2", price: 20.99 },
    { id: "3", name: "Product 3", price: 30.99 },
    { id: "4", name: "Product 4", price: 40.99 },
  ];

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {/* Display cart items or show message if cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ margin: "10px 0" }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <hr />
          <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
        </div>
      )}

      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <h4>{product.name}</h4>
          <p>Price: Rs{product.price}</p>
          <button onClick={() => AddCart(product)}>Add {product.name} to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
