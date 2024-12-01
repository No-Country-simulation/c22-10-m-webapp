import { useParams } from "react-router-dom";

export const Categoria = () => {
  // -------------------API---------------------//
  const apiPrueba = [
    {
      id_producto: 4,
      nombre: "Dream Duo",
      precio: "6000.00",
      descripcion: "Kit X2 de bombas de sal para una noche de baño relajante.",
      ingredientes:
        "-Bomba Lavanda: Con aceite de lavanda, aceite de jazmín y sal de Himalaya.\r\n-Bomba Valeriana: Con aceite de valeriana, aceite de jazmín y sal de mar.",
      beneficios:
        "-Ayuda a relajar el y cuerpo y la mente antes de dormir.\r\n-Deja la piel suave e hidratada.",
      imagen: "http://127.0.0.1:8000/productos/BOMBAS_DE_SAL_1_S2tYdDA.jpg",
      categoria: "bombas-de-sal",
    },
    {
      id_producto: 5,
      nombre: "Morning Glow",
      precio: "6000.00",
      descripcion: "Kit X2 Bombas de sal para un baño vitalizante de día.",
      ingredientes:
        "-Bomba Limón: Con aceite de naranja, aceite de limón y sal de mar.\r\n-Bomba Menta: Con aceite de eucalipto, aceite de menta y sal de Himalaya.",
      beneficios:
        "-Ayuda a aumentar la energía y la vitalidad para empezar el día.\r\n-Deja la piel fresca y revitalizada.",
      imagen: "http://127.0.0.1:8000/productos/BOMBAS_DE_SAL_2_feRcxoL.jpg",
      categoria: "bombas-de-sal",
    },
    {
      id_producto: 6,
      nombre: "Skin Revive",
      precio: "5500.00",
      descripcion: "Kit X2 jabones naturales para el día.",
      ingredientes:
        "-Jabón Vera: Con aceite de lavanda , aceite de romero y extracto de aloe vera.\r\n-Jabón Valeriana: Con aceite de valeriana, aceite de jazmín y extracto de té de manzanilla.",
      beneficios:
        "-Promueve un sueño profundo y reparador.\r\n-Deja la piel suave e hidratada.",
      imagen: "http://127.0.0.1:8000/productos/JABONES_1.jpg",
      categoria: "jabones-artesanales",
    },
    {
      id_producto: 7,
      nombre: "Pure Pair",
      precio: "5500.00",
      descripcion: "Kit X2 jabones naturales para la noche.",
      ingredientes:
        "-Jabón Lavanda: Con aceite de lavanda, aceite de bergamota y extracto de aloe vera.\r\n-Jabón Manzanilla: Con aceite de valeriana, aceite de jazmín y extracto de té de manzanilla.",
      beneficios:
        "-Promueve un sueño profundo y reparador.\r\n-Deja la piel suave e hidratada.",
      imagen: "http://127.0.0.1:8000/productos/JABONES_2.jpg",
      categoria: "jabones-artesanales",
    },
  ];
  // -------------------API---------------------//
  const { categoria } = useParams();
  const categoriaFormateada = categoria
    .replace(/-/g, " ") // Reemplazamos los guiones por espacios
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizamos la primera letra de cada palabra

  const productosFiltrados = apiPrueba.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <div>
      <h1>{categoriaFormateada}</h1>

      {productosFiltrados.length > 0 ? (
        <ul>
          {productosFiltrados.map((producto) => (
            <li key={producto.id}>{producto.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};
