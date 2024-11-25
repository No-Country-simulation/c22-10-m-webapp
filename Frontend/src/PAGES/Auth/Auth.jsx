import { Link, Outlet, useLocation } from "react-router-dom";
import "./Auth.css";
import { useState, useEffect } from "react";

export const Auth = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const [authType, setAuthType] = useState({
    h6: "¿Aún no tienes cuenta?",
    boton: "Regístrate",
    link: "registro", // Enlace inicial
  });

  useEffect(() => {
    // Actualizar el estado basado en la ruta actual
    if (location.pathname === "/auth/registro") {
      setAuthType({
        h6: "¿Ya tienes una cuenta?",
        boton: "Inicia sesión",
        link: "login", // Cambiar al enlace de login
      });
    } else {
      setAuthType({
        h6: "¿Aún no tienes cuenta?",
        boton: "Regístrate",
        link: "registro", // Cambiar al enlace de registro
      });
    }
  }, [location.pathname]); // Dependencia para ejecutar el efecto cuando cambia la ruta

  return (
    <div className="fondo-auth">
      <h1>Aroma, textura y paz en perfecta sintonía.</h1>
      <div className="login-register-container">
        <Outlet />
      </div>
      <div className="container-link-auth">
        <h6>{authType.h6}</h6>
        <Link to={authType.link}>{authType.boton}</Link>
      </div>
    </div>
  );
};
