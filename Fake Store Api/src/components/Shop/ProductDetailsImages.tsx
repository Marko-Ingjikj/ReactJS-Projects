import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  reviews: number;
  stock: number;
}

const ProductDetailsImages = () => {
  const { id } = useParams();

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
    reviews: 0,
    stock: 0,
  });
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  return (
    <div className="product-images">
      <div className="image-display">
        <img
          src={`${
            product.images.length > 0 ? product.images[imageIndex].url : ""
          }`}
          alt=""
          className="product-page-image"
        />
      </div>
      <div className="images-slide">
        <img
          src={`${product.images.length > 0 ? product.images[0].url : ""}`}
          className="image-slide-btn"
          alt=""
          onClick={() => setImageIndex(0)}
        />
        <img
          src={`${product.images.length > 0 ? product.images[1].url : ""}`}
          className="image-slide-btn"
          alt=""
          onClick={() => setImageIndex(1)}
        />
        <img
          src={`${product.images.length > 0 ? product.images[2].url : ""}`}
          className="image-slide-btn"
          alt=""
          onClick={() => setImageIndex(2)}
        />
        <img
          src={`${product.images.length > 0 ? product.images[3].url : ""}`}
          className="image-slide-btn"
          alt=""
          onClick={() => setImageIndex(3)}
        />
        <img
          src={`${product.images.length > 0 ? product.images[4].url : ""}`}
          className="image-slide-btn"
          alt=""
          onClick={() => setImageIndex(4)}
        />
      </div>
    </div>
  );
};

export default ProductDetailsImages;
