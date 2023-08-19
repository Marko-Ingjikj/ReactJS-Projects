import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Header from "./Header";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   shipping: boolean;
//   color: string;
//   stock: number;
// }

const Cart = () => {
  const { cart } = useSelector((state: any) => state.shop);

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart-info">
          <div className="cart-headers">
            <p className="cart-div">Item</p>
            <p className="cart-div">Price</p>
            <p className="cart-div">Quantity</p>
            <p className="cart-div">Subtotal</p>
          </div>
          {cart.map((item: any) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
            />
          ))}

          <div className="continue-or-discard-shopping">
            <button className="continue-shopping-btn">Continue Shopping</button>
            <button className="clear-cart-btn">Clear Shopping Cart</button>
          </div>
        </div>
        <div className="cart-total-and-finish-order">
          <div className="cart-total-price">
            <div className="fee-subtotal-div">
              <div className="cart-total-div bold">
                <span>Subtotal:</span> <span>100$</span>
              </div>
              <div className="cart-total-div">
                <span>Shipping Fee:</span> <span>$5.34</span>
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
    </>
  );
};

export default Cart;
