const box = document.querySelector(".box");
const btn = document.getElementById("btn");
const block = document.querySelector(".block");
let postX = 0;
let posrY = 0;

function startRecursia() {
  setTimeout(() => {
    postX += 10;
    if (postX <= 450) {
      console.log(postX);
      block.style.left = `${postX}px`;
      startRecursia();
    }
  }, 10);
  setTimeout(() => {
    posrY += 10;
    if (postX >= 440 && posrY <= 450) {
      console.log(posrY);
      block.style.top = `${posrY}px`;
      startRecursia();
    }
  }, 1000);
  setTimeout(() => {
    postX -= 10;
    if (posrY >= 440 && postX >= 440) {
      console.log(postX);
      block.style.left = `${postX}px`;
      startRecursia();
    }
  }, 100);
}

startRecursia();

// function startRecursia() {
//   let postX = 0;
//   let posrY = 0;
//   function move() {
//     if (postX == 440) {
//       clearInterval(stop);
//     }
//     postX += 10;
//     block.style.left = `${postX}px`;
//     console.log(postX);
//     ///////////// block.style.left = postX + "px";

//     if (postX == 450 && posrY >= 440) {
//       posrY += 10;
//       block.style.top = `${postX}px`;
//     }
//   }
// }

// startRecursia();

///////////////////////////////////////////////

const p_time = document.querySelector("#p_time");
const btn_time_start = document.getElementById("btn_time");
const body = document.querySelector("body");
btn_time_start.addEventListener("click", () => {
  let i = 0;
  let time = setInterval(() => {
    i++;
    p_time.innerHTML = i;
    if (i == 60) {
      clearInterval(time);
      body.style.background = "#cc9900";
    }
  }, 100);
});

////////////////////////////
