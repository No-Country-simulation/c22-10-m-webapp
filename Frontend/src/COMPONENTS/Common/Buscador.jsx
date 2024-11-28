import React from "react";
import Select from "react-select";
const options = [
  { value: "crema-aloe", label: "Crema de Aloe Vera" },
  { value: "jabón-menta", label: "Jabón de Menta" },
  { value: "crema-avena", label: "Crema de Avena" },
  // Más opciones...
];

const Buscador = () => {
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

  return (
    <Select
      options={options}
      placeholder="¿Qué buscas hoy?"
      styles={customStyles} // Aplica los estilos en línea
    />
  );
};

export default Buscador;
