import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Item</h1>
      <p>ID recebido: {id}</p>
    </div>
  );
};

export default Details;
