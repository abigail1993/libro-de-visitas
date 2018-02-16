var commentText = document.getElementById("comentario");
var commentPreview = document.getElementById("comentario-2");

commentText.addEventListener("keyup", Agregar);

function Agregar(){// esto hace que el comentario del textarea1 se escribas en el segundo.
  var textNow = event.target.value;
  commentPreview.innerHTML = textNow;
}



// se declaran variables (es el primer paso que hace para escribir codigo)
var largeSize = document.getElementById("large");
var mediumSize = document.getElementById("medium");
var smallSize =document.getElementById("small");

var color =document.getElementById("color1");
var color2 = document.getElementById("color2");

var izq = document.getElementById("izquierda");
var center = document.getElementById("centro");
var derecha1 = document.getElementById("derecha");
//se declaran los eventos (que es el tercer paso al escribir codigo)
large.addEventListener("click",fLarge);
medium.addEventListener("click",fmedium);
small.addEventListener("click",fsmall);

color1.addEventListener("click",colorLetra);
color2.addEventListener("click",colorText);

izquierda.addEventListener("click",alinearIzq);
centro.addEventListener("click",alinearCentro);
derecha.addEventListener("click",alinearDerecha);

//estas funciones solo declaran los cambios (es el segundo paso al hacer codigo)
function fLarge(){
  commentPreview.style.fontSize = "80px";
}

function fmedium(){
  commentPreview.style.fontSize = "50px";
}

function fsmall(){
  commentPreview.style.fontSize ="20px";
}

function colorLetra(){
  var colordeLetra = prompt("escoge un color en hexadecimal");
  commentPreview.style.color = colordeLetra;
}

function colorText(){
  var colordeFondo = prompt("escoge un color en hexadecimal");
  commentPreview.style.background = colordeFondo;
}


function alinearIzq(){
  commentPreview.style.textAlign = "left";
}

function alinearCentro(){
  commentPreview.style.textAlign= "center";
}

function alinearDerecha(){
  commentPreview.style.textAlign = "right";
}
