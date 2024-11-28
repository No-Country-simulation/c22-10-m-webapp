import { useParams } from "react-router-dom";

export const Producto = () => {
  const { productoId } = useParams();
  return <div>Producto</div>;
};
