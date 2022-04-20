import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice.js";
import { Link } from "react-router-dom";
import "./shop.scss";

function Product({ name, id, thumbnailUrl, price, weight }) {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(cartActions.addToCart({ name, id, price, thumbnailUrl, weight }));
  };

  return (
    <div className="shop-inner-products__items">
      <div className="inner-img-wrap">
        <div className="inner-options">
          <button to="#" className="inner-options__details">
            <Link to={`/details/${id}`}>
              <i className="ti-eye" />
            </Link>
          </button>
          <button
            className="inner-options__add-cart"
            onClick={handleAddProduct}
          >
            <i className="ti-shopping-cart" />
          </button>
        </div>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <div className="inner-desc-text">
        <h4>{name}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;
