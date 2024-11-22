import { Outlet } from "react-router-dom";
import Cabecera from "../COMPONENTS/Cabecera";

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
