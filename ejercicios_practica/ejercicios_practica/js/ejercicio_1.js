"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda

if (numero1 > numero2) {
    console.log("El número 1 es mayor que el número 2");
  } else if (numero2 > numero1) {
    console.log("El número 2 es mayor que el número 1");
  } else {
    console.log("Ambos números son iguales");
  }
  

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

if (numero1 > 0) {
    console.log("El número 1 es positivo");
  } else if (numero1 < 0) {
    console.log("El número 1 es negativo");
  } else {
    console.log("El número 1 es cero");
  }
  

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

if (numero1 > 0 && numero1 < 100) {
    console.log("El número 1 es mayor que 0 y menor que 100");
  } else {
    console.log("El número 1 no cumple la condición");
  }
  
// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if (numero1 < 10 || numero2 > -2) {
    console.log('Se cumple la condición');
  } else {
    console.log('No se cumple la condición');
  }