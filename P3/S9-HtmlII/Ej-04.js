//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
body = document.getElementsByTagName('body')[0]

//-- Función de retrollamada de tecla pulsada
window.onkeydown = (e) => {

    body.classList.toggle("color");
  }

window.onkeyup = (e) => {
  body.classList.toggle("color");
  }
  