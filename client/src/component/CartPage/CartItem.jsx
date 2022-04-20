import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice.js";

function CartItem({ id, name, price, total, quantity, thumbnailUrl, weight }) {
  const disptach = useDispatch();
  const handleAdd = () => {
    disptach(cartActions.addToCart({ name, id, price, thumbnailUrl, weight }));
  };
  const handleRemove = () => {
    disptach(cartActions.removeFromCart(id));
  };

  return (
    <>
      <tr>
        <td id="cart-thumbnail">
          <img src={thumbnailUrl} alt={name} />
        </td>
        <td id="cart-name">{name}</td>
        <td id="cart-weight">{weight} kg</td>
        <td id="cart-quantity">{quantity}</td>
        <td id="cart-price">${price}</td>
        <td id="cart-subtotal">${total}</td>
        <td className="cart-remove">
          <button onClick={handleAdd}>+</button>
          <button onClick={handleRemove}>-</button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
