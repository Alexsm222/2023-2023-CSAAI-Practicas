console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 600;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 10;
let y = 20;

//-- Velocidad horizontal del objeto
let velx = 5;
let vely = 3.8;

//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animación:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilíneo uniforme)

  //-- Comprobar colisión con borde derecho
  //-- Si se alcanza la anchura del canvas, se cambia la velocidad
  //-- de signo (rebote)
  if (x < 0 || x >= (canvas.width - 50) ) {
    velx = -velx;
  }
  if (y < 0 || y >= (canvas.height - 50) ) {
    vely = -vely;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, true);
    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();