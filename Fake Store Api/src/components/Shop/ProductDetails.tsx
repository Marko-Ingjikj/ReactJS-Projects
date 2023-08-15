import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  company: string;
  images: { url: string }[];
  shipping: boolean;
  stars: number;
  colors: Array<string>;
}

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: "",
    company: "",
    images: [],
    shipping: true,
    stars: 0,
    colors: [],
  });
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);
  return (
    <div>
      <Header />
      <div className="product-details-page">
        <div className="back-button">
          <Link className="back-button-text" to={"/"}>
            BACK TO PRODUCTS
          </Link>
        </div>
        <div className="details">
          <div className="product-images">
            <div className="image-display">
              {/* <img
                src={`${product ? product.images[imageIndex].url : ""}`}
                alt=""
              /> */}
            </div>
          </div>
          {/* <div className="images-slide">
            <img src={product.images[1].url} alt="" />
            <img src={product.images[2].url} alt="" />
            <img src={product.images[3].url} alt="" />
          </div> */}
          <div className="product-detials">
            <Rating initialValue={product.stars} allowFraction={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
