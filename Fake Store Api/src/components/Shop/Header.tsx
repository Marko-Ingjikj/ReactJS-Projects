import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  company: string;
  image: string;
  shipping: boolean;
  colors: Array<string>;
}

const Header = () => {
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    company: "",
    image: "",
    shipping: true,
    colors: [],
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://course-api.com/react-store-single-product?id=${id}`)
        .then((response) => setProduct(response.data));
    }
  }, []);

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
    <div className="header">
      <h1>
        <Link className="header-link" to={"/"}>
          Home
        </Link>
        <span> / </span>
        {id
          ? capitalizeWords(product.name)
          : capitalizeWords(location.pathname.replace("/", ""))}
      </h1>
    </div>
  );
};

export default Header;
