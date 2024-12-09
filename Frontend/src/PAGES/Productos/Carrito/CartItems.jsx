import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import "./CartItems.css";

export const CartItems = () => {
  const { cartDetails, totalPrice, incrementItem, decrementItem, removeItem } =
    useShoppingCart();

  // Convertir los detalles del carrito a un array para iterar
  const cartItems = Object.values(cartDetails || {});

  return (
    <div className="cart-items">
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Precio: {item.formattedPrice}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <div className="cart-actions">
                    <button onClick={() => incrementItem(item.id)}>+</button>
                    <button onClick={() => decrementItem(item.id)}>-</button>
                    <button onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: {totalPrice}</h3>
        </>
      )}
    </div>
  );
};
