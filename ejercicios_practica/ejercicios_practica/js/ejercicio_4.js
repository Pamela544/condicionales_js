"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if (texto1 > texto2) {
  console.log("La primera palabra es mayor");
} else if (texto2 > texto1) {
  console.log("La segunda palabra es mayor");
} else {
  console.log("Ambas palabras son iguales");
}


//  Transforma esas variables tipo texto y almacénalas
 //en nuevas variables númericas (Number) con parseInt()
  //Repita el proceso, ¿Cuál de las nuevas variables es mayor?
  //Imprima en pantalla según corresponda


let num1 = parseInt(texto1);
let num2 = parseInt(texto2);

if (num1 > num2) {
  console.log("El número " + num1 + " es mayor que el número " + num2);
} else if (num2 > num1) {
  console.log("El número " + num2 + " es mayor que el número " + num1);
} else {
  console.log("Los números son iguales");
}


//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
