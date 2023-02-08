const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};
hideTabContent();
const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};
showTabContent();

//////////////////////////////////////////////////////////////////////////////////////////

let c = 0;
const slider = (e) => {
  setInterval((i) => {
    if (c === 4) c = 0;
    hideTabContent();
    showTabContent(c);
    c++;
  }, 2300);
};
slider();
tabsParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (e.target === item) {
        hideTabContent();
        showTabContent(i);
        c = i;
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");
const modalTrigger2 = document.querySelector(".btn_dark");
const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};
modalTrigger.addEventListener("click", openModal);
modalTrigger2.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

const diolog = document.querySelector(".modal__dialog");
modal.addEventListener("click", (e) => {
  if (!diolog.contains(e.target) && modal.classList.contains("show"))
    closeModal();
});
const scroolEnd = () => {
  const footer = document.documentElement;
  if (footer.scrollTop + footer.clientHeight >= footer.scrollHeight - 0.8) {
    openModal();
  }
};
window.addEventListener("scroll", scroolEnd);

//////////////////////////////////////////////////////////////////////////////////////////////////
const message = {
  loading: "loading",
  success: "Cкоро мы с вами свяжемся!!!",
  fail: "упс, ошибочка!",
};

const forms = document.querySelectorAll("form");
const postData = (form) => {
  form.onsubmit = (e) => {
    e.preventDefault();

    const messageBlock = document.createElement("div");
    messageBlock.setAttribute("class", "messageBlock");
    messageBlock.textContent = message.loading;
    diolog.append(messageBlock);

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json");

    const formData = new FormData(form);
    const object = {};

    formData.forEach((item, i) => {
      const arr = [item, i];
      console.log(arr);
      object[i] = item;
    });
    console.log(object);
    const json = JSON.stringify(object);
    request.send(json);

    const closeMessage = function () {
      setTimeout(() => {
        messageBlock.remove();
      }, 4000);
    };
    request.onload = () => {
      setTimeout(() => {
        messageBlock.textContent = message.loading;
        if (request.status == 200) {
          console.log("ok");
          messageBlock.textContent = message.success;
          messageBlock.style.background = "rgb(236, 231, 237)";
          messageBlock.style.color = "rgb(70, 173, 29)";
          closeMessage();
          setTimeout(() => {
            closeModal();
          }, 4500);
          document.getElementById("input1").value = "";
          document.getElementById("input2").value = "";
        } else {
          console.log("not ok");
          messageBlock.textContent = message.fail;
          messageBlock.style.background = "red";
          closeMessage();
        }
      }, 1500);
    };
  };
};
forms.forEach((item) => {
  postData(item);
});

//
console.log("Не корируйте моё дз!!!");
