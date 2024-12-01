import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Populares } from "./PAGES/Productos/Populares";
import { Login } from "./PAGES/Auth/Login";
import { Register } from "./PAGES/Auth/Register";
import { Auth } from "./PAGES/Auth/Auth";
import { Home } from "./PAGES/Home";
import { Carrito } from "./PAGES/Productos/Carrito/Carrito";
import { Favoritos } from "./PAGES/Productos/Favoritos/Favoritos";
import { Kits } from "./PAGES/Productos/Kits/Kits";
import { Productos } from "./PAGES/Productos/Productos/Productos";
import { Categoria } from "./PAGES/Productos/Productos/Categoria";
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
        path: "productos",
        element: <Productos />,
      },
      {
        path: "kits",
        element: <Kits />,
      },
      {
        path: "categorias/:categoria",
        element: <Categoria />,
      },
    ],
  },
  {
    path: "/populares",
    element: <Populares />,
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
