import { useEffect } from "react";
import "./FAQ.scss";

function FAQPage() {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-items__title");
    const faqBody = document.querySelectorAll(".faq-body");

    faqItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        faqBody[index].classList.toggle("show");
      });
    });
  }, []);
  return (
    <div id="faq">
      <div className="faq__banner">
        <div className="blur-overlay" />
        <h3>Blog Detail</h3>
      </div>
      <div className="faq-container">
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>What Shipping Methods Are Available?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>Do You Ship Internationally ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>How can I change my shipping address ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>How</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>Can you ship your product anywhere ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>How many types od food are there in your shop ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>How do I place an Order ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
        <div className="faq-items">
          <div className="faq-items__title">
            <h3>Do I need an account to place an order ?</h3>
            <i className="ti-angle-down" />
          </div>
          <div className="faq-body">
            <p>
              Sed sed nulla sit amet erat rhoncus placerat. Etiam ante diam,
              auctor eu libero at, faucibus laoreet dolor. Pellentesque non
              velit orci. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse euismod
              velit ultrices arcu facilisis vehicula. In consequat imperdiet
              augue nec sagittis. Integer feugiat tempus odio, at tincidunt
              tellus bibendum in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
