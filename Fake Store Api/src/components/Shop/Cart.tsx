import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Header from "./Header";
import { clearCart } from "../../common/actions/actions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  shipping: boolean;
  color: string;
  stock: number;
  quantity: number;
}

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.shop);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let subtotal = cart.reduce(
      (total: any, item: any) => total + item.quantity * item.price,
      0
    );

    setSubtotal(subtotal);
  }, [cart]);

  return (
    <>
      <Header />

      {cart.length == 0 ? (
        <div className="empty-cart">
          <h1>You cart is empty</h1>
          <Link to={"/"} className="fill-it-btn">
            Fill it
          </Link>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-info">
            <div className="cart-headers">
              <p className="cart-div">Item</p>
              <p className="cart-div">Price</p>
              <p className="cart-div">Quantity</p>
              <p className="cart-div">Subtotal</p>
            </div>
            {cart.map((item: CartItem) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                stock={item.stock}
                image={item.image}
                quantity={item.quantity}
                color={item.color}
              />
            ))}

            <div className="continue-or-discard-shopping">
              <button className="continue-shopping-btn">
                Continue Shopping
              </button>
              <button
                className="clear-cart-btn"
                onClick={() => dispatch(clearCart())}>
                Clear Shopping Cart
              </button>
            </div>
          </div>
          <div className="cart-total-and-finish-order">
            <div className="cart-total-price">
              <div className="fee-subtotal-div">
                <div className="cart-total-div bold">
                  <span>Subtotal:</span>{" "}
                  <span>$ {(subtotal / 100).toLocaleString("en-US")}</span>
                </div>
                <div className="cart-total-div">
                  <span>Shipping Fee:</span>
                  <span>
                    ${" "}
                    {cart.some((item: any) => item.shipping == true)
                      ? "5.34"
                      : "0"}
                  </span>
                </div>
              </div>
              <div>
                <div className="cart-total-div bold bigger-font-size">
                  <span>Order total:</span> <span>105$</span>
                </div>
              </div>
            </div>
            <div className="cart-finish-order">
              <button className="cart-finish-order-btn">Finish order</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
