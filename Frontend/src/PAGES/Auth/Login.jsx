import { Link, Outlet } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      Login
      <Link to="/registro">Registro</Link>
      <Link to="/">Home</Link>
    </div>
  );
};
