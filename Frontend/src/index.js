import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "use-shopping-cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_test_51QTv6xAhPVV6uKQN8tKJIpN57y7lUD7YUm63raR5TCy0kIb2tawyP99ukB0Y2RFjvaENSAoHnykRRgPyTrtbHIne00xbVZfMvH" // Reemplaza con tu clave de Stripe
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <App />
    </CartProvider>
  </React.StrictMode>
);

// Si deseas medir rendimiento
reportWebVitals();
