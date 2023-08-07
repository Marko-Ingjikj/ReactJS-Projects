import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
  description,
  price,
  rating,
  images,
  brand,
  thumbnail,
}: {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: Array<string>;
  brand: string;
  thumbnail: string;
}) => {
  return (
    <Link to={`/${id}`}>
      <p>{brand}</p>
      {/* <img src={images[0]} alt="" /> */}
    </Link>
  );
};

export default Product;
0;
