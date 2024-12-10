import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ReactComponent as Bajar } from "../../../IMAGES/SVG/bajar.svg";
import { ReactComponent as Subir } from "../../../IMAGES/SVG/subir.svg";
import { TrashIcon } from "@heroicons/react/24/outline";
import "./CartItems.css";
import { Link } from "react-router-dom";

export const CartItems = () => {
  const {
    cartDetails,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart();

  // Convertir los detalles del carrito a un array para iterar
  const cartItems = Object.values(cartDetails || {});

  return (
    <div className="cart-items">
      {cartItems.length === 0 ? (
        <div className="container-vacio">
          <h3>Aún no tenés producto en tu carrito de compras</h3>
          <p>
            Cuando elijas tus productos te mostraremos el resumen de tu compra
            con la información de descuentos y promociones disponibles.
          </p>
        </div>
      ) : (
        <div className="shopping-cart-info">
          <table className="tabla-carrito">
            <caption className="titulo-cart">
              <h2>Mi carrito de compras</h2>
              <p>{cartCount} productos agregados</p>
            </caption>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id} className="cart-item">
                  <td style={{ width: "35%" }}>
                    <span className="indice-prod-cart">{index + 1}</span>
                    <div className="container-flex container-prod">
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td style={{ width: "25%" }}>
                    <div className="cart-actions container-flex">
                      <Bajar
                        onClick={() => decrementItem(item.id)}
                        className="flechas-cart"
                      />
                      <p>{item.quantity}</p>
                      <Subir
                        onClick={() => incrementItem(item.id)}
                        className="flechas-cart"
                      />
                    </div>
                  </td>
                  <td style={{ width: "30%" }}>
                    <div className="container-flex container-valor">
                      <p>${item.price}</p>
                      <TrashIcon
                        onClick={() => removeItem(item.id)}
                        className="flechas-cart"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">
                  <div className="container-checkout">
                    <div className="info">
                      <h3>Resumen de mi compra</h3>
                      <p>
                        Subtotal:{" "}
                        <span>
                          <b>${totalPrice}</b>
                        </span>
                      </p>
                      <p>
                        Entrega:{" "}
                        <span>
                          <b>$0</b>
                        </span>
                      </p>
                      <p>
                        <strong>Total:</strong>{" "}
                        <span>
                          <b>${totalPrice}</b>
                        </span>
                      </p>
                    </div>
                    <div className="btns">
                      <Link to="/">Seguir comprando</Link>
                      <Link onClick={redirectToCheckout}>Finalizar compra</Link>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};
