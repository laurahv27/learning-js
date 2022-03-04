// get elements from the DOM using document.getElementById("id")
var input = document.getElementById("input");
var button = document.getElementById("button");
var list = document.getElementById("list");

// add event listener, listening click event on button

// callback es una función que se pasa como parametro, para que alguien más me la ejecute
button.addEventListener("click", function () {
  var text = input.value;

  var li = document.createElement("li");
  li.innerText = text; // <li>innerText</li>

  list.appendChild(li); // poner el li debajo del ul
  input.value = "";
});
