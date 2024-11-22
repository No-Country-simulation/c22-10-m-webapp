import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./PAGES/ErrorPage";
import { Layout } from "./PAGES/Layout";
import { Enlace } from "./PAGES/enlaces/Enlace";
import { Enlaceuno } from "./PAGES/enlaces/Enlaceuno";
import { Enlacedos } from "./PAGES/enlaces/Enlacedos";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/enlace", element: <Enlace /> },
      { path: "/enlaceuno", element: <Enlaceuno /> },
      { path: "/enlacedos", element: <Enlacedos /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
