// // const block = document.getElementsByClassName("block");
// // let positionX_start = 0;
// // let positionY_start = 0;
// // let positionX_end = 448;
// // let positionY_end = 448;
// // const move = () => {
// //   if (positionX_start <= 440) {
// //     positionX_start += 15;
// //     block[0].style.left = `${positionX_start}px`;
// //     setTimeout(move, 20);
// //   } else if (positionX_start >= 440 && positionY_start <= 440) {
// //     positionY_start += 15;
// //     block[0].style.top = `${positionY_start}px`;
// //     setTimeout(move, 20);
// //   } else if (positionX_end > 0) {
// //     positionX_end -= 15;
// //     block[0].style.left = `${positionX_end}px`;
// //     setTimeout(move, 20);
// //   } else if (positionY_end > 0) {
// //     positionY_end -= 15;
// //     block[0].style.top = `${positionY_end}px`;
// //     setTimeout(move, 20);
// //   } else if (positionY_end === -2) {
// //     location.reload();
// //   }
// // };
// // move();

// // ////////////////////////////////////////////////////////////////////

// let time = setInterval(() => console.log("start"), 1000);
// setTimeout(() => {
//   clearInterval(time);
// }, 60000);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const block = document.querySelector(".block");

// let positionX = 0;
// let positionY = 0;
// let positionX_true = false;
// let positionX_false = false;
// let start = 1;

// const move = () => {
//   if (start === 1) {
//     if (positionX_true === false && positionX <= 440) {
//       positionX += 15;
//       block.style.left = `${positionX}px`;
//       setTimeout(move, 10);
//     } else if (positionX >= 440 && positionY <= 440) {
//       positionY += 15;
//       block.style.top = `${positionY}px`;
//       setTimeout(move, 10);
//     } else if (positionX > 0 && positionY >= 440) {
//       positionX_true = true;
//       positionX -= 15;
//       block.style.left = `${positionX}px`;
//       setTimeout(move, 10);
//     } else if (positionX_false === false && positionY > 0) {
//       if (positionY === 10) positionX_true = false;
//       positionY -= 10;
//       block.style.top = `${positionY}px`;
//       setTimeout(move, 10);
//     }
//   }
// };
// move();

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const body = document.querySelector("body");
const newTime = document.querySelector("#p_time");
let i = 0;
const time = setInterval(() => {
  i++;
  newTime.innerHTML = i;
  if (i === 60) {
    body.style.background = "#cccc33";
  }
}, 100);
setTimeout(() => {
  clearInterval(time);
}, 6000);

const block = document.getElementsByClassName("block");
let positionX_start = 0;
let positionY_start = 0;
let positionX_end = 448;
let positionY_end = 448;
const move = () => {
  if (positionX_start <= 440) {
    positionX_start += 15;
    block[0].style.left = positionX_start + "px";
    setTimeout(move, 45);
  } else if (positionX_start >= 440 && positionY_start <= 440) {
    positionY_start += 15;
    block[0].style.top = `${positionY_start}px`;
    setTimeout(move, 42);
  } else if (positionX_end > 0) {
    positionX_end -= 15;
    block[0].style.left = `${positionX_end}px`;
    setTimeout(move, 40);
  } else if (positionY_end > 0) {
    positionY_end -= 15;
    block[0].style.top = `${positionY_end}px`;
    setTimeout(move, 40);
  } else if (positionY_end === -2) {
    location.reload();
  }
};
move();
