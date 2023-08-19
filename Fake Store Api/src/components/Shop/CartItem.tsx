const CartItem = (id: any, name: any, price: any, stock: any) => {
  return (
    <div className="cart-item-details">
      <div className="cart-item-div cart-div">
        <div className="cart-item-image-div">
          <img
            src="https://www.course-api.com/images/store/product-12.jpeg"
            alt=""
            className="cart-item-image"
          />
        </div>
        <div className="cart-item-text">
          <p className="cart-item-name bold">Cart Item</p>
          <div className="cart-item-color">
            <span>Color:</span>
            <div className="cart-item-color-chosen"></div>
          </div>
        </div>
      </div>
      <p className="cart-price-p cart-div" id="cart-price">
        100$
      </p>
      <div className="cart-quantity-div cart-div">
        <div className="quantity-item-div">
          <button className="quantity-button smaller-font-size">-</button>
          <span className="quantity-span">1</span>
          <button className="quantity-button smaller-font-size">+</button>
        </div>
      </div>
      <p className="cart-subtotal-p cart-div">100$</p>
      <button className="cart-remove-item">
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
