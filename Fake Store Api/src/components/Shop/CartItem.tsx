import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../common/actions/actions";

const CartItem = ({
  id,
  name,
  price,
  stock,
  image,
  quantity,
  color,
}: {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  quantity: number;
  color: string;
}) => {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(quantity);

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

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

  return (
    <div className="cart-item-details">
      <div className="cart-item-div cart-div">
        <div className="cart-item-image-div">
          <img src={image} alt="" className="cart-item-image" />
        </div>
        <div className="cart-item-text">
          <p className="cart-item-name bold">{capitalizeWords(name)}</p>
          <div className="cart-item-color">
            <span>Color:</span>
            <div
              className={`cart-item-color-chosen ${checkColor(color)}`}></div>
          </div>
        </div>
      </div>
      <p className="cart-price-p cart-div" id="cart-price">
        $ {(price / 100).toLocaleString("en-US")}
      </p>
      <div className="cart-quantity-div cart-div">
        <div className="quantity-item-div">
          <button
            className="quantity-button smaller-font-size"
            onClick={() => setProductQuantity(productQuantity - 1)}
            disabled={productQuantity == 1}>
            -
          </button>
          <span className="quantity-span">{productQuantity}</span>
          <button
            className="quantity-button smaller-font-size"
            onClick={() => setProductQuantity(productQuantity + 1)}
            disabled={productQuantity == stock}>
            +
          </button>
        </div>
      </div>
      <p className="cart-subtotal-p cart-div">
        $ {((price / 100) * productQuantity).toLocaleString("en-US")}
      </p>
      <button
        className="cart-remove-item"
        onClick={() => dispatch(removeFromCart(id))}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
