import { Outlet } from "react-router-dom";
import Cabecera from "../COMPONENTS/Layout/Cabecera";

export const Layout = () => {
  return (
    <div>
      <Cabecera />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};
