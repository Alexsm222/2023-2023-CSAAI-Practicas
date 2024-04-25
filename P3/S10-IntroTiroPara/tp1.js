

const canvas = document.getElementById("ctiro");

const ctx = canvas.getContext("2d");

canvas.width = 800
canvas.height = 400

//-- Angulo del disparo
const angulo = document.getElementById("angulo")
const valorANG = document.getElementById("valorANG")
angulo.oninput = () => {
  valorANG.innerHTML = angulo.value;
}

//-- Potencia del disparo
const potencia = document.getElementById("potencia")
const valorPOT = document.getElementById("valorPOT")
potencia.oninput = () => {
  valorPOT.innerHTML = potencia.value;
}


//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
  lanzar();
}

btnIniciar.onclick = () => {
  location.reload()
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;

//-- Velocidad del proyectil
let velp = 2;

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = getRandomArbitrary(200,770);
let yo = 370;

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  xp = xp + velp;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo

  dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}

dibujarP()

//-- función para pintar el objetivo
function dibujarO(x,y) {

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'red';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();
  console.log(x)
  ctx.closePath();
}

dibujarO()