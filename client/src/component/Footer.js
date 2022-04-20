function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__info--left">
          <h2>ORCHID</h2>
          <p>
            <i className="ti-location-pin" />
            379 5th Ave New York, NYC 10018
          </p>
          <p>
            <i className="ti-mobile" />
            (+1) 96 716 6879
          </p>
          <p>
            <i className="ti-email" /> contact@site.com
          </p>
        </div>
        <div className="footer__info--right">
          <div className="footer__info--right__items">
            <h3>SHOP</h3>
            <p>
              <a href="#">Food</a>
            </p>
            <p>
              <a href="#">Farm</a>
            </p>
            <p>
              <a href="#">Farm</a>
            </p>
            <p>
              <a href="#">Orchid</a>
            </p>
          </div>
          <div className="footer__info--right__items">
            <h3>SUPPORT</h3>
            <p>
              <a href="#">Contact Us</a>
            </p>
            <p>
              <a href="#">FAQ</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
          </div>
          <div className="footer__info--right__items">
            <h3>MY ACCOUNT</h3>
            <p>
              <a href="#">Sign In</a>
            </p>
            <p>
              <a href="#">My Cart</a>
            </p>
            <p>
              <a href="#">My Wishlist</a>
            </p>
            <p>
              <a href="#">Check Out</a>
            </p>
          </div>
          <div className="footer__info--right__items">
            <h3>NEWSLETTER</h3>
            <p>Subscribe now to get daily updates</p>
            <input type="text" placeholder="Your Email..." />
          </div>
        </div>
      </div>
      <div className="footer__credit">
        <p>Copyright © 2017 Designed by Upperthemes. All rights reserved.</p>
        <div className="footer__credit-card">
          <a href="#">
            <img src="/images/home/creadit-card-01.png" alt="card-1" />
          </a>
          <a href="#">
            <img src="./images/home/creadit-card-02.png" alt="card-2" />
          </a>
          <a href="#">
            <img src="./images/home/creadit-card-03.png" alt="card-3" />
          </a>
          <a href="#">
            <img src="./images/home/creadit-card-04.png" alt="card-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
