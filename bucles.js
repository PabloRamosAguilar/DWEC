//Ej1
//En este ejercicio pedimos un dato de una rueda para evaluar su tamano
function tamannoRueda() {
    var diametro, grosor;
    diametro = prompt('Introduce el diametro de la rueda en metros: ');
    //diametro = Number(diametro);
    grosor = prompt('Introduce el grosor de la rueda en metros; ');
    //grosor = Number(grosor);
    if (diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
        alert('El grosor para esta rueda es inferior al recomendado.')
    }
    if (diametro > 1.4) {
        alert('La rueda es para un vehículo grande.');
    } else if (diametro <= 1.4 && diametro > 0.8) {
        alert('La rueda es para un vehículo mediano.');
    } else {
        alert('La rueda es para un vehículo pequeño.');
    }


}
//Ej2
//En este ejercicio pedimos un numero y le decimos si es par o impar.
function numeroPar() {
    var numeroEntrada
    numeroEntrada = prompt('Introduce un número');
    numeroEntrada = Number(numeroEntrada);
    if ((numeroEntrada % 2) == 0) {
        alert('El Numero es par');
    } else {
        alert('EL Número es impar');
    }
}
//Ej3
//En este ejercicio contamos del 1 al 50 pero los multiplos de 3 son Fizz, los de 5 Buzz y los de ambos FizzBuzz
function unoAlCincuenta() {
    var maximo = 51;
    var fizzBuzzTrigger = false;

    for (let counter = 1; counter < maximo; counter++) {

        if (((counter % 3) == 0) && ((counter % 5) == 0)) {
            alert('FizzBuzz');
            fizzBuzzTrigger = true;
        }

        if (((counter % 3) != 0) && fizzBuzzTrigger == false) {
            if ((counter % 5) == 0) {
                alert('Buzz');
            } else {
                alert(counter);
            }
        }

        if (((counter % 3) == 0) && fizzBuzzTrigger == false) {
            alert('Fizz');
        }

        fizzBuzzTrigger = false;

    }
}
//Ej4
//Pedimos una edad y devolvemos si es mayor o menor de edad.
function mayorMenorEdad() {
    var edad = 0;
    edad = prompt('Introduce la edad (en número)');
    if (Number(edad) >= 18) {
        alert('Es mayor de edad');
    } else {
        alert('Es menor de Edad');
    }
}

//Ej5
//Enseñamos por alerta los primeros 20 numeros pares.
function numerosPares() {
    var parCount = 0;
    var counter = 0;
    while (parCount < 20) {

        var esPar = false


        if ((counter % 2) == 0) {
            var esPar = true;
        }
        if ((counter % 2) != 0) {
            var esPar = false;
        }

        if (esPar) {
            alert(counter);
            parCount++;
        }

        counter++
    }

       

    
}

//Ej6
//Enseñamos la suma de los 20 primeros numeros.
function sumaNumeros() {
    var sumatorio = 0;
    for (let counter = 0; counter < 21; counter++) {

        sumatorio += counter;

        if (counter == 20) {
            alert(sumatorio);
        }

    }

}

