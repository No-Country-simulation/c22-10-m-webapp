import { useParams } from "react-router-dom";

export const Categoria = () => {
  const { categoriaId } = useParams();
  return <div>Categoria</div>;
};
