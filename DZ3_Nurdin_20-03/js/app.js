////////////////////меню/////////////////////
const tabParent = document.querySelector(".tabheader__items");
const tabItems = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((tab) => {
    tab.style.display = "none";
  });
  tabItems.forEach((i) => {
    i.classList.remove("tabheader__item_active");
  });
};
hideTabContent();

//////////////////////////////////////////////////////////////////


const showContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabItems[i].classList.add("tabheader__item_active");
};
showContent();
tabParent.addEventListener("click", (event) => {
  const target = event.target;
  // если не содержит!!
  if (!target.classList.contains("tabheader__item_active")) {
    tabItems.forEach((item, index) => {
      if (item === target) {
        hideTabContent();
        showContent(index);
        //////////////////////////////
        // console.log(index);
        // console.log(item);
      }
    });
  }
});

//////////////////////////////////////////////////////////////////


const modal = document.querySelector(".modal");
const open = document.querySelector("#open_modal");
const close = document.querySelector("#close_modal");
open.addEventListener("click", () => {
  // modal.style.display = "block";
  modal.classList.remove("close_modal");
  modal.classList.add("open_modal");
});

close.addEventListener("click", () => {
  // modal.style.display = "none";
  modal.classList.remove("open_modal");
  modal.classList.add("close_modal");
});
