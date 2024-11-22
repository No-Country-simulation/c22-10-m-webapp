import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Home } from "./PAGES/Home";
import { Pagina_1 } from "./PAGES/Pagina_1";
import { Pagina2 } from "./PAGES/Pagina_2";
import { Otra } from "./PAGES/Otra";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/pagina1", element: <Pagina_1 /> },
      { path: "/pagina2", element: <Pagina2 /> },
    ],
  },
  {
    path: "/otra",
    element: <Otra />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
