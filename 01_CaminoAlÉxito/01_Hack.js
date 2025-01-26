/**
 * ============================================
 * EXAMEN TÉCNICO DE JAVASCRIPT - NIVEL AVANZADO
 * ============================================
 * 
 * Instrucciones:
 *  Completa todos los ejercicios en este mismo archivo
 *  ¡Buena suerte!
 */

// ===== SECCIÓN 1: CORRECCIÓN DE CÓDIGO =====

/**
 * Ejercicio 1 (2 puntos)
 * Corrige este código para que filtre correctamente números pares:
 * [1,2,3,4,5,6] => [2,4,6]
 */
function filtrarPares(arr) {
    // Código a corregir:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

/**
 * Ejercicio 2 (2 puntos)
 * Explica por qué este código falla y corrígelo para que imprima 0,1,2,3,4:
 */
function arreglarTimeout() {
    // Código original:
    // for (var i = 0; i < 5; i++) {
    //     setTimeout(() => console.log(i), 100);
    // }
    
    // Escribe tu corrección aquí
}

// ===== SECCIÓN 2: IMPLEMENTACIÓN DE ALGORITMOS =====

/**
 * Ejercicio 3 (3 puntos)
 * Escribe una función que calcule el n-ésimo número de Fibonacci optimizado
 */
function fibonacciOptimizado(n) {
    // Implementación aquí
}

/**
 * Ejercicio 4 (3 puntos)
 * Encuentra la longitud de la subsecuencia creciente más larga:
 * Ejemplo: [10,9,2,5,3,7,101,18] → 4 ([2,3,7,101])
 */
function subsecuenciaCrecienteMasLarga(nums) {
    // Implementación aquí
}

// ===== SECCIÓN 3: ESTRUCTURAS COMPLEJAS =====

/**
 * Ejercicio 5 (5 puntos)
 * Busca una clave en objetos anidados y devuelve su primer valor encontrado
 */
function buscarEnEstructura(obj, clave) {
    // Implementación aquí
}

/**
 * Ejercicio 6 (5 puntos)
 * Crea un contador que evite números prohibidos al incrementar
 */
function crearContadorEspecial(inicial, prohibidos) {
    // Implementación aquí
}

module.exports = {
    filtrarPares,
    arreglarTimeout,
    fibonacciOptimizado,
    subsecuenciaCrecienteMasLarga,
    buscarEnEstructura,
    crearContadorEspecial
  };