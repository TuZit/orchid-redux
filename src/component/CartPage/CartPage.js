import "./CartPage.scss";

function CartPage() {
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
            <tr>
              <td id="cart-thumbnail">
                <img src="./images/products/lettuce.jpg" alt="lecttuce" />
              </td>
              <td id="cart-name">Salad</td>
              <td id="cart-weight">0.4 kg</td>
              <td id="cart-quantity">
                <input type="number" defaultValue={1} />
              </td>
              <td id="cart-price">$2.26</td>
              <td id="cart-subtotal">$2.26</td>
              <td className="cart-remove">
                <a href="true">x</a>
              </td>
            </tr>
            <tr>
              <td id="cart-thumbnail">
                <img src="./images/products/tomato.jpg" alt="tomato" />
              </td>
              <td id="cart-name">Tomato</td>
              <td id="cart-weight">0.4 kg</td>
              <td id="cart-quantity">
                <input type="number" defaultValue={1} size={4} />
              </td>
              <td id="cart-price">$2.26</td>
              <td id="cart-subtotal">$2.26</td>
              <td className="cart-remove">
                <a href="true">x</a>
              </td>
            </tr>
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
                  <th>Subtotal</th>
                  <td>$6.31</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$6.31</td>
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
