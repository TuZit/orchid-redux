import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginActions } from "./../store/loginSlice";

function Header() {
  const navigate = useNavigate();
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/login");
  };
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
            <Link to="/manage">Manage User</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/404">404 Page</Link>
            <Link to="/feature">FAQ</Link>
          </div>
        </li>
      </ul>
      <div className="header__cart">
        <Link to="#">
          <i className="ti-search" />
        </Link>
        <Link to="/cart" title="Go to Cart !">
          <i className="ti-shopping-cart" />
          <span>{cartItems.length}</span>
        </Link>
        <button title="Log Out !" className="logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
