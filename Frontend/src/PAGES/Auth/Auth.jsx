import { Link, Outlet, useLocation } from "react-router-dom";
import "./Auth.css";
import { useState, useEffect } from "react";
import {
  ArrowLeftIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

export const Auth = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const [authType, setAuthType] = useState({
    h6: "¿Aún no tienes cuenta?",
    boton: "Regístrate",
    link: "registro",
  });

  useEffect(() => {
    // Actualizar el estado basado en la ruta actual
    if (location.pathname === "/auth/registro") {
      setAuthType({
        h6: "¿Ya tienes una cuenta?",
        boton: "Inicia sesión",
        link: "login",
        heroicon: (
          <ArrowRightEndOnRectangleIcon
            style={{
              color: "rgba(240, 248, 255, 0.616)",
              height: "24px",
              width: "24px",
            }}
          />
        ), // Cambiar al enlace de login
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
        <Link to={authType.link}>
          {authType.boton}
          {authType.heroicon}
        </Link>
      </div>
      <Link to="/">
        <ArrowLeftIcon
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            top: "20px",
            left: "30px",
            color: "#F0F8FF",
          }}
        />
      </Link>
    </div>
  );
};
