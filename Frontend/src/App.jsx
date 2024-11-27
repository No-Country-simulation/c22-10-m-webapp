import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Populares } from "./PAGES/Productos/Populares";
import { Login } from "./PAGES/Auth/Login";
import { Register } from "./PAGES/Auth/Register";
import { Auth } from "./PAGES/Auth/Auth";
import { Home } from "./PAGES/Home";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
