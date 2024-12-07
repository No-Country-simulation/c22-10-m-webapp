import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const Buscador = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        const opciones = data.map((producto) => ({
          value: producto.id_producto, // Suponiendo que cada producto tiene un id único
          label: producto.nombre,
        }));
        setProductos(opciones);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "rgb(167, 152, 154)", // Fondo del input principal
      borderRadius: "50px",
      border: "none", // Esquinas redondeadas
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "rgb(167, 152, 154)", // Fondo del menú desplegable
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "rgb(130, 119, 120)" // Fondo al hacer hover
        : "rgb(167, 152, 154)", // Fondo predeterminado
      color: "#ffffff", // Color del texto
    }),
    placeholder: (base) => ({
      ...base,
      paddingLeft: "5%",
      color: "#ffffff", // Cambia el color del placeholder
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff", // Cambia el color del texto dentro del input
      paddingLeft: "5%",
    }),
  };

  // Función que maneja el cambio de selección
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      navigate(`/productos/${selectedOption.value}`); // Navegar a la página del producto
    }
  };

  return (
    <Select
      options={productos} // Aquí se pasan las opciones obtenidas de la API
      placeholder="¿Qué buscas hoy?"
      styles={customStyles} // Aplica los estilos en línea
      onChange={handleChange} // Asignamos la función de manejo de selección
    />
  );
};

export default Buscador;
