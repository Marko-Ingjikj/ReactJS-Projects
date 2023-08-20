import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../common/actions/actions";

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

const ProductDetailsText = () => {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);
  const [activeColorFilter, setActiveColorFIlter] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productShipping, setProductShipping] = useState(false);
  const [productImage, setProductImage] = useState("");

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

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  useEffect(() => {
    if (product.images.length !== 0) {
      setActiveColorFIlter(product.colors[0]);
      setProductName(product.name);
      setProductPrice(product.price);
      setProductStock(product.stock);
      setProductShipping(product.shipping);
      setProductImage(product.images[0].url);
    }
  }, [product]);

  const onSubmit = () => {
    dispatch(
      addToCart({
        id,
        name: productName,
        color: activeColorFilter,
        quantity: productQuantity,
        price: productPrice,
        stock: productStock,
        shipping: productShipping,
        image: productImage,
      })
    );
  };

  const checkColor = (color: string) => {
    if (color == "#000") {
      return "black";
    }
    if (color == "##00ff00") {
      return "green";
    }
    if (color == "##ffb900") {
      return "yellow";
    }
    if (color == "#0000ff") {
      return "blue";
    }
    if (color == "#ff0000") {
      return "red";
    } else {
      return "black";
    }
  };

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
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
        <p className="product-p">
          <span className="product-span">Avaiable:</span>
          <span className="product-availability">
            {product.stock > 0 ? (
              <p className="in-stock">In Stock</p>
            ) : (
              <p className="not-in-stock">Not In Stock</p>
            )}
          </span>
        </p>
        <p className="product-p">
          <span className="product-span">SKU:</span>
          <span className="product-availability">{product.id}</span>
        </p>
        <p className="product-p">
          <span className="product-span">Brand:</span>
          <span className="product-availability">{product.company}</span>
        </p>
      </div>
      <hr />

      {product.stock !== 0 && (
        <div>
          {" "}
          <div className="product-colors">
            <p className="product-color-p">Colors:</p>
            <div className="product-details-color-picker">
              {product.colors.map((color): any => (
                <button
                  className={`color-button-product-details ${checkColor(
                    color
                  )} ${activeColorFilter == `${color}` ? "active-color" : ""}`}
                  key={color}
                  onClick={() => setActiveColorFIlter(color)}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`checkbox ${
                      activeColorFilter == `${color}` ? "active-color" : ""
                    }`}>
                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                  </svg>
                </button>
              ))}
            </div>
            <div className="product-color-picker"></div>
          </div>
          <div className="product-add-to-cart">
            <div className="add-quantity">
              <button
                onClick={() => setProductQuantity(productQuantity - 1)}
                disabled={productQuantity == 1}
                className="quantity-button">
                -
              </button>
              <span className="quantity-span">{productQuantity}</span>
              <button
                onClick={() => setProductQuantity(productQuantity + 1)}
                disabled={product.stock == productQuantity}
                className="quantity-button">
                +
              </button>
            </div>
            <div>
              <button className="add-to-cart-btn" onClick={() => onSubmit()}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsText;
