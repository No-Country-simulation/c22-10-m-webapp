import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Login } from "./PAGES/Auth/Login";
import { Register } from "./PAGES/Auth/Register";
import { Auth } from "./PAGES/Auth/Auth";
import { Home } from "./PAGES/Home";
import { Carrito } from "./PAGES/Productos/Carrito/Carrito";
import { Favoritos } from "./PAGES/Productos/Favoritos/Favoritos";
import { Kits } from "./PAGES/Productos/Kits/Kits";
import { Producto } from "./PAGES/Productos/Productos/Producto";
import { Categoria } from "./PAGES/Productos/Productos/Categoria";
import { Populares } from "./PAGES/Productos/Productos/Populares";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "populares",
        element: <Populares />,
      },
      {
        path: "kits",
        element: <Kits />,
      },
      {
        path: "categorias/:categoria",
        element: <Categoria />,
      },
      {
        path: "productos/:id",
        element: <Producto />,
      },
    ],
  },

  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registro",
        element: <Register />,
      },
    ],
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
