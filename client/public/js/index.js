const faqItems = document.querySelectorAll(".faq-items__title");
const faqBody = document.querySelectorAll(".faq-body");

faqItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    faqBody[index].classList.toggle("show");
  });
});
//
//

const commerceTabs = document.querySelectorAll(
  ".shop-details__commerce-tabs--items"
);
const commercePanes = document.querySelectorAll(
  ".shop-details__commerce-panes--items"
);

const activeTab = document.querySelector(".shop-details__commerce-tabs--items");
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
    console.log(tab.offsetLeft);
  });
});
