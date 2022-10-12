const $ = require("jquery");

$(() => {
  let html = "";
  for (let i = 0; i < 16; i++) {
    html += "<button>STUFF</button>";
  }
  $(".grid-container").html(html);
  console.log($(".grid-container").html());
});
