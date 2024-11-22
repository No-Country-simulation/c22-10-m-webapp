import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/home">link1</Link>
        <Link to="/pagina1">link2</Link>
        <Link to="/pagina2">link3</Link>
        <Link to="/otra">fuera de layout</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};
