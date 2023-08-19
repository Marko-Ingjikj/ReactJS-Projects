import { Link } from "react-router-dom";

const Product = ({
  id,
  name,
  price,
  image,
}: {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}) => {
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
    <div className="product">
      <Link to={`/${id}`}>
        <img src={image} alt="" className="product-thumbnail" />
        <div className="name-and-price-div">
          <p>{capitalizeWords(name)}</p>
          <p>$ {(price / 100).toLocaleString("en-US")}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
0;
