import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, StyledBadge } from "@mui/material";

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">ORCHID</Link>
      </div>
      <ul className="header__bar">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li id="feature">
          <Link to="/feature">FEATURE</Link>
          <div className="feature-drop">
            <Link to="/404">404 Page</Link>
            <Link to="/feature">FAQ</Link>
            <Link to="/login">Login</Link>
          </div>
        </li>
      </ul>
      <div className="header__cart">
        <Link to="#">
          <i className="ti-search" />
        </Link>
        <Link to="/cart">
          <i className="ti-shopping-cart" />
          <span>{totalQuantity}</span>
        </Link>
        {/* 
        <Avatar
          alt="avatar"
          src="./images.avatar.jpg"
          className="header__cart-avatar"
        /> */}
      </div>
    </div>
  );
}

export default Header;
