var secretkey = [];
var exitos = [];
var rnum;
var i;
var console;

function secreto_random(nr) {
    for (let i = 0; i < 4; i++){
        let rnum = Math.floor(Math.random() * 10);
        nr.push(rnum);
    }

}

secreto_random(secretkey);
console.log('NUMERO SECRETO', secretkey);

const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

const crono = new Crono(gui.display);

const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}

let estado = ESTADO.INIT;



function digito(ev){
    if (estado == ESTADO.INIT) {
        display.innerHTML = ev.target.value;
        estado = ESTADO.OP1;
    } else {
        contra1.innerHTML += ev.target.value;
    } 
    
}

digitos = document.getElementsByClassName("filas")

for (let boton of digitos) {
    boton.onclick = (ev) => {
       console.log(ev.target.value) 
        crono.start();
        
            for(j = 0; j < secretkey.length; j++)  {

                if (secretkey[j] == ev.target.value){
                    contra1.innerHTML = secretkey[j] 
                    contra1.style.cssText = 'color:  #FAC174;';
                    exitos.push(secretkey[j] );
                    secretkey[j] = 11;
                }
                else if (secretkey[j+1] == ev.target.value){
                    contra2.innerHTML = secretkey[j+1]
                    contra2.style.cssText = 'color:  #FAC174;';
                    exitos.push(secretkey[j+1] );
                    secretkey[j+1]  = 11;
                }
                else if (secretkey[j+2] == ev.target.value){
                    contra3.innerHTML = secretkey[j+2] 
                    contra3.style.cssText = 'color:  #FAC174;';
                    exitos.push(secretkey[j+2] );
                    secretkey[j+2]  = 11;
                   
                }
                else if(secretkey[j+3] == ev.target.value){
                    contra4.innerHTML = secretkey[j+3] 
                    contra4.style.cssText = 'color:  #FAC174;'; 
                    exitos.push(secretkey[j+3] ); 
                    secretkey[j+3]  = 11;
                }
                console.log("ACIERTOS", exitos)
                break
                
            }  
            if (secretkey.length==exitos.length){
                crono.stop();
                secretkey=[];
            }
           
    }    
}

console.log("Ejecutando JS...");

gui.start.onclick = () => {
    console.log("Start");
    crono.start();
}

gui.stop.onclick = () => {
    console.log("Stop");
    crono.stop();
}

gui.reset.onclick = () => {
    console.log("Reset");
    crono.reset();
}

reset.onclick = () => {
    crono.reset();
    crono.stop();
    secretkey=[];
    exitos=[];
    contra1.style.cssText = 'color:  #FAEBD7;';
    contra2.style.cssText = 'color:  #FAEBD7;';
    contra3.style.cssText = 'color:  #FAEBD7;';
    contra4.style.cssText = 'color:  #FAEBD7;';
    display.innerHTML = "0:0:0";
    estado = ESTADO.INIT;
    contra1.innerHTML = "*";
    contra2.innerHTML = "*";
    contra3.innerHTML = "*";
    contra4.innerHTML = "*";
    secreto_random(secretkey);
    console.log('NUMERO SECRETO',secretkey)
}