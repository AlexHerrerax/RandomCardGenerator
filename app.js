                                                                                                    //Simbolos y numeros
let symbol = ["&#9824", "&#9827", "&#9829", "&#9830"];
let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];



function cartas() {
                                                                                                     //Se elige un numero random dentro del Array, multiplicado por la cantidad, para que sea exacta
    let symbolReal = Math.floor(Math.random() * symbol.length);
    let numberReal = Math.floor(Math.random() * number.length);

    //SIMBOLO

    let obtenerSym = document.querySelectorAll(".suit");                                           //Selecciono todas las clases .suit
    obtenerSym.forEach(function (a) {                                                            //Me devuelve un array y lo recorro con foerach
        a.innerHTML = symbol[symbolReal];                                                        //Me devuelve el indice random y lo adjunto al html
        if (symbol[symbolReal] === symbol[2] || symbol[symbolReal] === symbol[3]) {              //Indico que los ultimos 2 simbolos deben ser rojos
            a.style.color = "red";
        }else{
            a.style.color="black";
        }

    });

    //NUMERO
    let obtenerNumber = document.getElementById("number");
    obtenerNumber.innerHTML = number[numberReal];

}

let boton = document.getElementById("boton")
boton.addEventListener("click",cartas)