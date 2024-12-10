import { CartItems } from "./CartItems";
import { Producto } from "../Productos/Producto";

const productData = [
  {
    name: "Bananas",
    price_id: "price_GBJ2Ep8246qeeT",
    // price in smallest currency unit (e.g. cent for USD)
    price: 400,
    image: "https://www.fillmurray.com/300/300",
    currency: "USD",
  },
  {
    name: "Tangerines",
    price_id: "price_GBJ2WWfMaGNC2Z",
    // price in smallest currency unit (e.g. cent for USD)
    price: 100,
    image: "https://www.fillmurray.com/300/300",
    currency: "USD",
  },
];

export function Carrito() {
  /* Gets the totalPrice and a method for redirecting to Stripe */

  return (
    <div style={{ width: "100%" }}>
      {/* Renders the products */}
      {productData.map((product) => (
        <Producto product={product} />
      ))}

      {/* This is where we'll render our cart */}

      <CartItems />
    </div>
  );
}
