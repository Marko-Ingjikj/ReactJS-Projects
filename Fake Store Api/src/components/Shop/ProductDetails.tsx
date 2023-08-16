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
  reviews: number;
  stock: number;
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
    reviews: 0,
    stock: 0,
  });
  const [imageIndex, setImageIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  console.log(product);

  return (
    <div>
      <Header />
      <div className="product-details-page">
        <div className="back-button">
          <Link className="back-button-text" to={"/"}>
            BACK TO PRODUCTS
          </Link>
        </div>

        <div className="product-details-page-items">
          <div className="product-images">
            <div className="image-display">
              <img
                src={`${
                  product.images.length > 0
                    ? product.images[imageIndex].url
                    : ""
                }`}
                alt=""
                className="product-page-image"
              />
            </div>
          </div>
          {/* <div className="images-slide">
            <img src={product.images[1].url} alt="" />
            <img src={product.images[2].url} alt="" />
            <img src={product.images[3].url} alt="" />
          </div> */}
          <div className="product-detials">
            <div className="product-name">
              <h1>{capitalizeWords(product.name)}</h1>
            </div>
            <div className="product-rating">
              <Rating
                initialValue={product.stars}
                allowFraction={true}
                readonly
                size={25}
              />
              <span>({product.reviews} customer reviews)</span>
            </div>
            <div className="product-price">
              $ {(product.price / 100).toLocaleString("en-US")}
            </div>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            <div className="product-avaiability-sku-brand">
              <p>
                <span className="product-span">Avaiable:</span>
                {product.stock > 0 ? `In stock` : "Not in stock"}
              </p>
              <p>
                <span className="product-span">SKU:</span>
                {product.id}
              </p>
              <p>
                <span className="product-span">Brand:</span>
                {product.company}
              </p>
            </div>
            <hr />
            <div className="product-colors">
              <p>Colors:</p>
              <div className="product-color-picker"></div>
            </div>
            <div className="product-add-to-cart">
              <div className="add-quantity">
                {" "}
                <button>-</button>
                <span>{productQuantity}</span>
                <button>+</button>
              </div>
              <div className="add-to-cart-btn">
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
