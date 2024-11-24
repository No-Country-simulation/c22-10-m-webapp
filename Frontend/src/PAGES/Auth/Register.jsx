import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      Register
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/">Home</Link>
    </div>
  );
};
