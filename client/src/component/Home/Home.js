import React from "react";
import "./home.scss";

function Home({ productItems }) {
  return (
    <div id="home">
      <div className="home-banner"></div>
      {/* thumbnails */}
      <div className="thumbnails">
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-16.jpg" alt="" />
          </div>
          <h4>Vegetable</h4>
        </div>
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-2.jpg" alt="" />
          </div>
          <h4>Fruit</h4>
        </div>
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-3.jpg" alt="" />
          </div>
          <h4>Meat</h4>
        </div>
      </div>
      {/* Products */}
      <div className="product">
        <h3>Our Product</h3>
        <div className="product__container">
          <div className="product__container-m">
            <div className="product__container-m__items">
              <img src="./images/home/home-4.jpg" alt="" />
              <p>Salad</p>
              <span>$2.00</span>
            </div>
            <div className="product__container-m__items">
              <img src="./images/home/home-5.jpg" alt="" />
              <p>Peppers</p>
              <span>$1.00</span>
            </div>
          </div>
          <div className="product__container-l">
            <div className="product__container-m__items">
              <img src="./images/home/home-6.jpg" alt="" />
              <p>Bean</p>
              <span>$2.00</span>
            </div>
          </div>
          <div className="product__container-m">
            <div className="product__container-m__items">
              <img src="./images/home/home-7.jpg" alt="" />
              <p>Salad</p>
              <span>$2.00</span>
            </div>
            <div className="product__container-m__items">
              <img src="./images/home/home-8.jpg" alt="" />
              <p>Peppers</p>
              <span>$1.00</span>
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="banner">
        <p>Orchid Foods</p>
        <h2>Healthy - Fresh - Delicious.</h2>
        <button className="btn">VIEW MORE</button>
      </div>
      {/* Blog */}
      <div className="blog">
        <h3>The Blog</h3>
        <div className="blog__container">
          <div className="blog__items">
            <img src="./images/home/home-9.jpg" alt="" />
            <div className="blog__items-desc">
              <h4>Beauty With Orchid Products</h4>
              <p>Feberuary 05, 2017</p>
              <span>
                Etiam at varius diam, id blandit erat. Suspendisse eget volutpat
                risus, id venenatis justo. Fusce elementum ligula elit. Duis
                ultricies ultrices nibh, a tincidunt risus pretium eleifend.
              </span>
            </div>
          </div>
          <div className="blog__items">
            <div className="blog__items-desc">
              <h4>Green Vegetables Are Good For Healthy</h4>
              <p>January 30, 2022</p>
              <span>
                Vivamus consectetur nulla mattis lorem ultricies, ac congue
                tellus consectetur. Vivamus sed purus volutpat, varius mauris
                id, tempus augue. Nuefd ans congue liquam.
              </span>
            </div>
            <img src="./images/home/home-10.jpg" alt="" />
          </div>
          <div className="blog__items">
            <img src="./images/home/home-11.jpg" alt="" />
            <div className="blog__items-desc">
              <h4>Refreshing Green Smoothie Recipe</h4>
              <p>January 20, 2022</p>
              <span>
                Praesent efficitur felis eu luctus vestibulum. In hac habitasse
                platea dictumst. Nam egestas eu nisl ac pellentesque. Duis
                congue suscipit lorem vel congue.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Sub banner */}
      <div className="sub-banner">
        <div className="sub-header__carousel">
          <img src="./images/home/home-12.jpg" alt="" />
          <img src="./images/home/home-13.jpg" alt="" />
          <img src="./images/home/home-14.jpg" alt="" />
        </div>
        <div className="blur-overlay" />
        <button className="btn">
          <i className="ti-instagram" />
          FOLLOW US
        </button>
      </div>
    </div>
  );
}

export default Home;
