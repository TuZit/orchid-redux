import { useEffect } from "react";

// import data from "../data/data.json";

import "./ShopDetail.scss";

function ShopDetail({ productItems }) {
  // Tab UI
  useEffect(() => {
    const commerceTabs = document.querySelectorAll(
      ".shop-details__commerce-tabs--items"
    );
    const commercePanes = document.querySelectorAll(
      ".shop-details__commerce-panes--items"
    );

    const activeTab = document.querySelector(
      ".shop-details__commerce-tabs--items"
    );
    const activeLine = document.querySelector(".active-line");
    activeLine.style.width = activeTab.offsetWidth + "px";
    activeLine.style.left = activeTab.offsetLeft + "px";

    commerceTabs.forEach((tab, index) => {
      tab.addEventListener("click", function (e) {
        document
          .querySelector(".shop-details__commerce-panes--items.show")
          .classList.remove("show");

        commercePanes[index].classList.add("show");

        activeLine.style.width = tab.offsetWidth + "px";
        activeLine.style.left = tab.offsetLeft + "px";
      });
    });
  }, []);

  return (
    <div id="shop-details">
      <div className="shop-details__banner">
        <div className="blur-overlay" />
        <h3>Our Product</h3>
      </div>
      <div className="shop-details__container">
        <div className="shop-details__product">
          <div className="shop-details__product-image">
            <div className="shop-details__product-image__mainImg">
              <img
                src={productItems[0].thumbnailUrl}
                alt={productItems[0].name}
              />
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
                Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut
                pharetra ut, interdum at mauris. Aenean efficitur aliquet libero
                sit amet scelerisque. Suspendisse efficitur mollis eleifend.
                Aliquam tortor nibh, venenatis quis sem dapibus, varius egestas
                lorem a sollicitudin.
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
                Tags: <a href="true">Natural</a>, <a href="#">Orchid</a>,
                <a href="true">Health</a>, <a href="#">Green</a>,
                <a href="true">Vegetable</a>
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
        {/* commerce */}
        <div className="shop-details__commerce">
          <div className="shop-details__commerce-tabs">
            <div className="shop-details__commerce-tabs--items">
              <h3>Description</h3>
            </div>
            <div className="shop-details__commerce-tabs--items">
              <h3>Additional Information</h3>
            </div>
            <div className="shop-details__commerce-tabs--items">
              <h3>Reviews</h3>
            </div>
            <div className="active-line" />
          </div>
          <div className="shop-details__commerce-panes">
            <div className="shop-details__commerce-panes--items show">
              <p>
                Donec scelerisque, sapien non tempus faucibus, eros metus
                aliquet lectus, et aliquam enim lorem non felis. Nulla
                facilisis, arcu ac pellentesque dictum, felis neque eleifend
                justo, id fringilla neque metus quis erat. Vivamus sed gravida
                orci. Curabitur viverra urna quam, eget placerat risus elementum
                at. Etiam convallis varius enim, aliquet eleifend leo cursus
                sed. Integer sed placerat ex, quis dictum metus. In eu ligula ut
                lacus porta imperdiet. Nullam vitae suscipit velit, a suscipit
                orci. Morbi orci velit, accumsan a arcu nec, aliquam cursus
                elit. Sed et varius neque. Curabitur rutrum dolor id odio
                sagittis iaculis. Ut tincidunt sit amet sapien et bibendum.
                Vivamus ac augue porttitor, consequat urna euismod, aliquet
                metus. Vestibulum arcu lectus, rutrum sed pretium quis, egestas
                ut nisi. Etiam maximus nulla sit amet nisi rutrum feugiat.
              </p>
            </div>
            <div className="shop-details__commerce-panes--items">
              <p>
                Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut
                pharetra ut, interdum at mauris. Aenean efficitur aliquet libero
                sit amet scelerisque. Suspendisse efficitur mollis eleifend.
                Aliquam tortor nibh, venenatis quis sem dapibus, varius egestas
                lorem a sollicitudin.
              </p>
            </div>
            <div className="shop-details__commerce-panes--items">
              <p>
                Phasellus consectetur elit massa, tristique tincidunt mi aliquam
                at. Duis dolor magna, viverra vel ullamcorper ac, semper non ex.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In est enim, lacinia nec sem
                eget, aliquam vulputate nisi. Nam gravida eu ex sed fermentum.
                Sed non sapien vitae diam lobortis consequat. Morbi augue eros,
                ultrices vitae quam ut, pharetra ornare felis. Proin ligula
                sapien, suscipit et justo id, malesuada fermentum elit. Donec
                fermentum pretium orci. Nulla commodo accumsan tortor, id
                pretium tortor. Cras ultricies nisl non nibh ultricies, viverra
                dapibus ante euismod. Suspendisse a elementum lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "100vh" }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2 shop-details__product-image__mainImg"
        >
          <SwiperSlide>
            <img
              src={productItems[0].thumbnailUrl}
              alt={productItems[0].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[1].thumbnailUrl}
              alt={productItems[1].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[2].thumbnailUrl}
              alt={productItems[2].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[3].thumbnailUrl}
              alt={productItems[3].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[4].thumbnailUrl}
              alt={productItems[4].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[5].thumbnailUrl}
              alt={productItems[5].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[6].thumbnailUrl}
              alt={productItems[6].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[7].thumbnailUrl}
              alt={productItems[7].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[8].thumbnailUrl}
              alt={productItems[8].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[9].thumbnailUrl}
              alt={productItems[9].name}
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          className="mySwiper shop-details__product-image__subImg"
        >
          <SwiperSlide>
            <img
              src={productItems[0].thumbnailUrl}
              alt={productItems[0].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[1].thumbnailUrl}
              alt={productItems[1].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[2].thumbnailUrl}
              alt={productItems[2].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[3].thumbnailUrl}
              alt={productItems[3].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[4].thumbnailUrl}
              alt={productItems[4].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[5].thumbnailUrl}
              alt={productItems[5].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[6].thumbnailUrl}
              alt={productItems[6].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[7].thumbnailUrl}
              alt={productItems[7].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[8].thumbnailUrl}
              alt={productItems[8].name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={productItems[9].thumbnailUrl}
              alt={productItems[9].name}
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}

export default ShopDetail;
