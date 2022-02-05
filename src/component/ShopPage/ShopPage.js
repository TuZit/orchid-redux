import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import "./ShopPage.scss";
import "./ShopDetail.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShopPage({ productItems, cartItems, handleAddProduct }) {
  // show/hide subcontent
  useEffect(() => {
    const detailBtn = document.querySelectorAll(".inner-options__details");
    const shopModal = document.getElementById("shop-modal");
    const closeModal = document.querySelector(".shop-modal-close");

    closeModal.addEventListener("click", () => {
      shopModal.classList.remove("show");
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) shopModal.classList.remove("show");
    });

    detailBtn.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        shopModal.classList.add("show");
      });
    });
  }, []);

  //

  // init products arr
  const fruits = productItems.filter((item, index) => {
    return item.category === "fruit" ? item : "";
  });
  const vegetables = productItems.filter((item, index) => {
    return item.category === "vegetable" ? item : "";
  });
  const meats = productItems.filter((item, index) => {
    return item.category === "meat" ? item : "";
  });

  return (
    <div>
      <div id="shop-page">
        <div className="shop-page__banner">
          <div className="blur-overlay" />
          <h3>Our Products</h3>
        </div>
        <div className="shop-page__category">
          <div className="shop-page__wrapper">
            {/* <div className="shop-page__wrap-items">
              <div className="shop-thumbnail">
                <img src="./images/shop/thumb-1.jpg" alt="" />
              </div>

              <div className="shop-outer-products">
                <h3>Vegetable</h3>
                <div className="shop-inner-products">
                  
                    {fruits.map((vege, index) => (
                      <div className="shop-inner-products__items" key={index}>
                        <div className="inner-img-wrap">
                          <div className="inner-options">
                            <button className="inner-options__details">
                              <i className="ti-eye" />
                            </button>
                            <button
                              className="inner-options__add-cart"
                              onClick={() => handleAddProduct()}
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                          </div>
                          <img src={vege.thumbnailUrl} alt={vege.name} />
                        </div>

                        <div className="inner-desc-text">
                          <h4>{vege.name}</h4>
                          <p>${vege.price}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div> */}
            <div className="shop-page__wrap-items">
              <div className="shop-thumbnail">
                <img src="./images/shop/thumb-1.jpg" alt="" />
              </div>
              <div className="shop-outer-products">
                <h3>Vegetable</h3>
                <div className="shop-inner-products">
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/lettuce.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/bok-choy.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Bol Choy</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/tomato.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Tomato</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-page__wrap-items">
              <div className="shop-thumbnail">
                <img src="./images/shop/thumb-2.jpg" alt="" />
              </div>
              <div className="shop-outer-products">
                <h3 style={{ color: "#333" }}>Fruit</h3>
                <div className="shop-inner-products">
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/apple.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/gurke.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/pear.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-page__wrap-items">
              <div className="shop-thumbnail">
                <img src="./images/shop/thumb-3.jpg" alt="" />
              </div>
              <div className="shop-outer-products">
                <h3>Meat</h3>
                <div className="shop-inner-products">
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/steak.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/pork.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                  <div className="shop-inner-products__items">
                    <div className="inner-img-wrap">
                      <div className="inner-options">
                        <button className="inner-options__details">
                          <i className="ti-eye" />
                        </button>
                        <button
                          className="inner-options__add-cart"
                          onClick={() => handleAddProduct()}
                        >
                          <i className="ti-shopping-cart" />
                        </button>
                      </div>
                      <img src="./images/shop/bacon.jpg" alt="" />
                    </div>
                    <div className="inner-desc-text">
                      <h4>Lettuce</h4>
                      <p>$3.20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <div className="shop-modal--details" id="shop-modal">
          <div className="shop-page-modal">
            <div className="shop-modal-overlay" />
            <div className="shop-modal-body">
              <div className="shop-modal-header">
                <div className="shop-modal-close">
                  <button type="button">x</button>
                </div>
              </div>
              <div className="shop-modal-content">
                <div className="shop-details__container">
                  <div className="shop-details__product">
                    <div className="shop-details__product-image">
                      <div className="shop-details__product-image__mainImg">
                        <img src="./images/products/bok-choy.jpg" alt="" />
                      </div>
                      <div className="shop-details__product-image__subImg">
                        <div className="shop-details__product-image__subImg-items">
                          <img src="./images/products/bok-choy.jpg" alt="" />
                        </div>
                        <div className="shop-details__product-image__subImg-items">
                          <img src="./images/products/onions.jpg" alt="" />
                        </div>
                        <div className="shop-details__product-image__subImg-items">
                          <img src="./images/products/lettuce.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* description */}
                    <div className="shop-details__product-description">
                      <div className="shop-details__product-description-title">
                        <div className="shop-details__product-description-title_name">
                          <h3>Bok Choy</h3>
                        </div>
                        <div className="shop-details__product-description-title_cost">
                          <p>$2.00</p>
                        </div>
                      </div>
                      <div className="shop-details__product-description-context">
                        <p>
                          Duis vestibulum ante velit. Pellentesque orci felis,
                          pharetra ut pharetra ut, interdum at mauris. Aenean
                          efficitur aliquet libero sit amet scelerisque.
                          Suspendisse efficitur mollis eleifend. Aliquam tortor
                          nibh, venenatis quis sem dapibus, varius egestas lorem
                          a sollicitudin.
                        </p>
                      </div>
                      <div className="shop-details__product-description-cart">
                        <div className="shop-details__product-description-cart-quantity">
                          <input
                            type="button"
                            defaultValue="-"
                            className="minusProduct"
                          />
                          <input
                            type="number"
                            defaultValue={1}
                            className="quantityNumber"
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="minusProduct"
                          />
                        </div>
                        <div className="shop-details__product-description-cart-buttonFunc">
                          <div className="shop-details__product-description-cart-addCart">
                            <button>ADD TO CART</button>
                          </div>
                          <div className="shop-details__product-description-cart-addWishList">
                            <button>
                              <i className="ti-heart" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="shop-details__product-description-tags">
                        <p>
                          Categories: <a href="true">Food</a>
                        </p>
                        <p>
                          Tags: <a href="true">Natural</a>,{" "}
                          <a href="true">Orchid</a>,<a href="true">Health</a>,{" "}
                          <a href="true">Green</a>,<a href="true">Vegetable</a>
                        </p>
                        <p>
                          ID: <a href="true">A203</a>
                        </p>
                      </div>
                      <div className="shop-details__product-description-socialMedia">
                        <i className="ti-facebook" />
                        <i className="ti-pinterest-alt" />
                        <i className="ti-twitter-alt" />
                        <i className="ti-vimeo-alt" />
                        <i className="ti-instagram" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
