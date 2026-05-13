let div = document.querySelector(".answer");

let input = prompt("");

var inputOneLine = input.replace(/\r/g, "").replace(/\n/g, " ");

const firstArray = inputOneLine.split(/(?<=[.?])\s+/);

const secondArray = firstArray.map(function (item) {
  return item.trim();
});

div.innerHTML = secondArray.join("<br><br>");
