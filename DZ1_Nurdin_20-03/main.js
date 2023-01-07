const gmailInput = document.getElementById("customerGmail");
const btnStart = document.querySelector(".btn_start");
const btn_result = document.getElementById("btn_inner_down");
const div_parent = document.querySelector(".div_parent_2");
// nur-dinDjumabekov2002@gmail.com
const gmailRegExp_1 = /^[A-Za-z0-9_\-]+\@[gmail]+\.[A-Za-z]{2,3}$/;
function startFunction() {
  if (gmailRegExp_1.test(gmailInput.value)) {
    btn_result.innerText = "✓";
    btn_result.style.backgroundColor = "green";
  } else {
    btn_result.innerText = "✖";
    btn_result.style.backgroundColor = "red";
  }
}

btnStart.onclick = () => {
  startFunction();
  const btn_update = document.createElement("button");
  btn_update.setAttribute("class", "btn_upDate");
  btn_update.innerText = "up";
  div_parent.append(btn_update);
  btn_update.onclick = () => {
    location.reload();
  };
};

///////////////////////////////////////////////////////////////

const innerSquare = document.querySelector(".div_inner_square_1");
const innerSquare_bnt = document.querySelector(".bnt_square");
innerSquare_bnt.onclick = () => {
  let marginLeft = 0;
  innerSquare.style.marginLeft = "0px";
  let i = 0;
  function startLeft() {
    i += 10;
    console.log(i);
    innerSquare.style.marginLeft = i + "px";
    if (i < 646) {
      startLeft();
    }
  }
  startLeft();
};
