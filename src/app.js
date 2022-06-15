/* eslint-disable */
import "bootstrap";
import "./style.css";

//Traemos el contenido de container
const container = document.querySelector(".container");

//Array de comienzo de globos
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
//función para establecer el color de un globo a null
function popBalloon(pos) {
  balloons[pos] = null;
  renderBalloon();
}

//Función para "pintar los globos"
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
  });

  //una vez tengo todo el contenido montado, lo asigno el contenido del container
  container.innerHTML = content;
}

window.onload = renderBalloon();
