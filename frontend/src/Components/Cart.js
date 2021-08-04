import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart, xaddToCart } from "../actions/cartActions";
import "../css/cart.css";
function Cart(props) {
  const { id } = useParams();
  // const product = maal.PSproducts.find((x) => x._id === id);
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  console.log("props me kya araaha: and qty", props, qty);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(id, qty));
    dispatch(xaddToCart(id, qty));

    return () => {};
  }, []);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const carting = (productId, e) => {
    dispatch(addToCart(productId, e));
    dispatch(xaddToCart(productId, e));
  };
  const checkoutHandler = () => {
    props.history.push("/register?redirect=shipping");
  };

  return (
    <div className="dcart">
      <div className="dcart-list">
        <ul className="dcart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="mcart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="mcart-name">
                  <div>
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                  </div>
                  <div >
                    Qty:
                    <select
                    className="m-2 p-1"
                      value={item.qty}
                      onChange={(e) => carting(item.product, e.target.value)}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      style={{color:'white'}}
                      className="btn btn-danger mx-4 p-1"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mcart-price">${item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="dcart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => Number(a) + Number(c.qty), 0)}{" "}
          items) : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          className="btn btn-primary w-100"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
