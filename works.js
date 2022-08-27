"use strict";

const page0 = document.querySelector(".page-0");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");

const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

let active = 0;

btn1.addEventListener("click", function () {
  active = 1;
  document.querySelector(`.btn-${active}`).style.backgroundColor = "#000000";

  if (btn0.classList.contains("hidden")) {
    console.log("btn1 pressed");
  } else {
    unactive(0);
  }
  if (btn2.classList.contains("hidden")) {
    console.log("btn1 pressed");
  } else {
    unactive(2);
  }
  page1.classList.remove("hidden");
  console.log("btn1 pressed");
});

btn2.addEventListener("click", function () {
  active = 2;
  document.querySelector(`.btn-${active}`).style.backgroundColor = "#000000";

  if (btn0.classList.contains("hidden")) {
    console.log("btn2 pressed");
  } else {
    unactive(0);
  }
  if (btn1.classList.contains("hidden")) {
    console.log("btn2 pressed");
  } else {
    unactive(1);
  }
  page2.classList.remove("hidden");
  console.log("btn2 pressed");
});

btn0.addEventListener("click", function () {
  active = 0;
  document.querySelector(`.btn-${active}`).style.backgroundColor = "#000000";

  if (btn2.classList.contains("hidden")) {
    console.log("btn0 pressed");
  } else {
    unactive(2);
  }
  if (btn1.classList.contains("hidden")) {
    console.log("btn0 pressed");
  } else {
    unactive(1);
  }
  page0.classList.remove("hidden");
  console.log("btn0 pressed");
});
// const btnArr [btn0, btn1, btn2];
// const pageArr [0, 1, 2];
function active1(num) {
  document.querySelector(`.btn-${num}`).style.backgroundColor = "#000000";
  document.querySelector(`.page-${num}`).classList.remove("hidden");
}

function unactive(num) {
  document.querySelector(`.btn-${num}`).style.backgroundColor = "#ffffff";
  document.querySelector(`.page-${num}`).classList.add("hidden");
}
page0.classList.remove(".hidden");

// active1();
// unactive();

active1(active);
console.log(active);
