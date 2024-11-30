import { useEffect } from "react";

export const Producto = () => {
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/productos/"; // URL sin cambios

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Mostrar los datos en la consola
      })
      .catch((error) => {
        console.error("Error:", error.message); // Mostrar el error en la consola
      });
  }, []); // No hay dependencias, solo se ejecuta una vez al montar el componente

  return <div>Producto</div>; // No es necesario renderizar nada en la pantalla
};
