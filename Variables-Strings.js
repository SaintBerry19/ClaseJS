// Tipos de datos y variables
// String = cadena de caracteres
// Int = Numero Entero
// Float = Numero Decimal
// Boolean = 0 o 1, true o false
// Variable es lo que sea que se le asigne, en JS debes definir que tipo de variable estas creando:
// var (ya casi nadie lo usa), let (permite cambio en la variable), const (no permite cambio en la variable)

let a = 4;
console.log(a);
// const a = 4 // dara un error
a = 6;
console.log(a);

let string = "Hola Mundo! Me llamo Roberto!";
console.log(string);
console.log("Hola Mundo! Me llamo Humberto!");
let nombre = "Roberto";
let edad = 28;
console.log("Hola me llamo ${nombre} y mi edad es ${edad}");
console.log(`Hola me llamo ${nombre} y mi edad es ${edad}`);
let edadTotal = edad + 30;
let stringTotal = string + " Hola me llamo juan.";
console.log(`${edadTotal + 32}\n${stringTotal}`);
console.log(edadTotal + 32, stringTotal);

// El indice es el valor posicional que tiene un caracter en toda la cadena, empieza del 0 y para llamarlo se utiliza la nomenclatura variable[indice]
string = "Roberto";
console.log(string[3]);
string = "987654321 123456789";
let number = 69;
console.log(string[4] + string[3]);
console.log(string.length);
console.log(string.slice(5));
console.log(string.slice(5, 10));
console.log(string.slice(-5));
number = number + 1;
console.log(number + 1);
number = number + 1;
console.log(number + 11);

