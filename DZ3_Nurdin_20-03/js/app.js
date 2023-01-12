////////////////////меню/////////////////////
const tabParent = document.querySelector(".tabheader__items");
const tabItems = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

const hideContent = () => {
  tabContent.forEach((i) => {
    i.style.display = "none";
  });
  tabItems.forEach((j) => {
    j.classList.remove("tabheader__item_active");
  });
};

hideContent();

const showContent = (n = 0) => {
  tabContent[n].style.display = "block";
  tabItems[n].classList.add("tabheader__item_active");
};

showContent();

//////////////////

tabParent.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.classList.contains("tabheader__item_active")) {
    tabItems.forEach((item, index) => {
      if (item === target) {
        hideContent();
        showContent(index);
      }
    });
    if (condition) {
    }
  }
});

///////////////modal/////////////////

const modal = document.querySelector(".modal");
const open = document.querySelector("#open_modal");
const close = document.querySelector("#close_modal");

open.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
