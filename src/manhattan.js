/*
document.addEventListener("DOMContentLoaded", function () {
  // calls main on load
  main();
});

const main = () => {
  // gets called at the start of the program
  createButtons();
};

const createButtons = () => {
  console.log("some bullshit");
  const btn = document.createElement("button");
  btn.innerHTML = "HELLO BUTTON";
  document.body.appendChild(btn);
};
*/
const $ = require("jquery");

$(() => {
  let html = "";
  for (let i = 0; i < 16; i++) {
    html += "<button>STUFF</button>";
  }
  $(".grid-container").html(html);
  console.log($(".grid-container").html());
});
