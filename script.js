let div = document.querySelector(".answer");

let input = prompt("");

// Remove carriage returns and replace newline characters with spaces
var inputOneLine = input.replace(/\r/g, "").replace(/\n/g, " ");

// Split the input text by period or question mark followed by space
const firstArray = inputOneLine.split(/(?<=[.?])\s+/);

// Map over the array to ensure each piece starts with a space
const secondArray = firstArray.map(function (item) {
  return " " + item;
});

// Join all pieces with a <br> to create separate lines in HTML
const thirdArray = secondArray.join("<br><br>");

// Set the innerHTML of the div to display each sentence or question on a new line
div.innerHTML = thirdArray;
