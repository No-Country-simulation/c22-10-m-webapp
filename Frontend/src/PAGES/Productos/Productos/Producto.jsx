import { useParams } from "react-router-dom";

export const Producto = () => {
  const { id } = useParams();
  return <div>Producto : {id}</div>;
};
