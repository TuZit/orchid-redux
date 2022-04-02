import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import "./CartPage.scss";

function CartPage() {
  let total = 0;
  const cartItems = useSelector((state) => state.cart.itemList);
  cartItems.forEach((item) => (total += item.totalPrice));

  return (
    <div className="cart-page">
      <div className="cart-page__table">
        <table className="cart-page__table-conainer">
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Weight</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                id={item.id}
                price={item.price}
                name={item.name}
                total={item.totalPrice}
                quantity={item.quantity}
                thumbnailUrl={item.thumbnailUrl}
                weight={item.weight}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={10}>
                <div className="cart-coupon">
                  <input type="text" placeholder="Coupon Code" />
                  <button>APPLY COUPON</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="cart-page__total">
        <div className="cart-page__total-container">
          <h3>Cart Total</h3>
          <div className="cart-page__total-table">
            <table>
              <tbody>
                <tr>
                  <th>Total</th>
                  <td>${total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
