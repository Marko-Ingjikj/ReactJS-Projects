import { useParams } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <h1>{id}</h1>
    </div>
  );
};

export default ProductDetails;
