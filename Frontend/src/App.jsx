import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Populares } from "./PAGES/Productos/Populares";
import { Login } from "./PAGES/Auth/Login";
import { Register } from "./PAGES/Auth/Register";
import { Auth } from "./PAGES/Auth/Auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
