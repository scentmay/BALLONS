/* eslint-disable */
import "bootstrap";
import "./style.css";

const container = document.querySelector(".container");

let balloons = [
  "pink",
  "black",
  "red",
  "blue",
  "yellow",
  "green",
  "null",
  "black",
  "red",
  "null",
  "yellow",
  "green"
];

function popBalloon(pos) {
  balloons[pos] = null;
  renderBalloon();
}

function renderBalloon() {
  let content = "";
  //Por cada color en el array balloons, generamos un globo a través de JS  y lo mostramos en la página con innerhtml:
  balloons.forEach(function(color, position) {
    var visible = "visibled";
    if (color == "null") {
      visible = "popped";
    }

    //Generamos los globos
    content += `<div class="balloon ${visible}" 
      style="background: ${color}"
      onclick="popBalloon(${position})"
      ></div>`;
    console.log(visible);
  });
  container.innerHTML = content;
}

window.onload = renderBalloon();
