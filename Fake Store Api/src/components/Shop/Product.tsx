import { Link } from "react-router-dom";

const Product = ({
  id,
  name,
  price,
  category,
  image,
}: {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}) => {
  return (
    <div className="product">
      <Link to={`/${id}`}>
        <img src={image} alt="" className="product-thumbnail" />
        <div className="name-and-price-div">
          <p>{name}</p>
          <p>$ {price / 100}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
0;
