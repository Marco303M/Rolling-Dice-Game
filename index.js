var randomNumber1 = Math.floor(((Math.random() * 6) + 1));

var newimage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", newimage1);


var randomNumber2 = Math.floor(((Math.random() * 6) + 1));

var newimage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", newimage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Won"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Won"
}
else {
  document.querySelector("h1").innerHTML = "Draw"
}
