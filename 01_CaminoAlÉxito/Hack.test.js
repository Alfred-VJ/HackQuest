/**
 * ============================================
 * PRUEBAS UNITARIAS - EXAMEN JAVASCRIPT
 * ============================================
 */

const {
    filtrarPares,
    arreglarTimeout,
    fibonacciOptimizado,
    subsecuenciaCrecienteMasLarga,
    buscarEnEstructura,
    crearContadorEspecial
  } = require('./01_Hack'); // Ajustar la ruta
 // ===== SECCIÓN 1: CORRECCIÓN DE CÓDIGO =====
describe('Ejercicio 1 - filtrarPares', () => {
    test('Filtra correctamente mezcla de pares/impares', () => {
      // Test modificado: Caso que fallaría con el código original
      expect(filtrarPares([2, 3, 5, 8, 10, 11])).toEqual([2, 8, 10]);
    });
  
    test('Array con múltiples impares consecutivos', () => {
      // El código original dejaría impares residuales
      expect(filtrarPares([1, 3, 5, 7, 9])).toEqual([]);
    });
  
    test('Array vacío devuelve array vacío', () => {
      expect(filtrarPares([])).toEqual([]);
    });
  });
  
  describe('Ejercicio 2 - arreglarTimeout', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.spyOn(global.console, 'log');
    });
  
    afterAll(() => {
      jest.useRealTimers();
    });
  
    test('Debe imprimir 0,1,2,3,4 en orden', () => {
      arreglarTimeout();
      jest.runAllTimers();
      
      // Test más estricto verificando cantidad y orden exacto
      expect(console.log).toHaveBeenCalledTimes(5);
      expect(console.log.mock.calls).toEqual([[0], [1], [2], [3], [4]]);
    });
  
    test('No debe mostrar números fuera de secuencia', () => {
      console.log.mockClear();
      arreglarTimeout();
      jest.runAllTimers();
      
      const valores = console.log.mock.calls.flat();
      expect(valores).not.toContain(5);
      expect(valores.every((n, i) => n === i)).toBe(true);
    });
  });
  // ===== SECCIÓN 2: IMPLEMENTACIÓN DE ALGORITMOS =====

describe('Ejercicio 3: fibonacciOptimizado', () => {
  test('calcula el n-ésimo número de Fibonacci correctamente', () => {
      expect(fibonacciOptimizado(0)).toBe(0);
      expect(fibonacciOptimizado(1)).toBe(1);
      expect(fibonacciOptimizado(2)).toBe(1);
      expect(fibonacciOptimizado(3)).toBe(2);
      expect(fibonacciOptimizado(10)).toBe(55);
  });
});

describe('Ejercicio 4: subsecuenciaCrecienteMasLarga', () => {
  test('encuentra la longitud de la subsecuencia creciente más larga', () => {
      const input = [10, 9, 2, 5, 3, 7, 101, 18];
      const expectedOutput = 4;
      expect(subsecuenciaCrecienteMasLarga(input)).toBe(expectedOutput);
  });

  test('devuelve 0 para un array vacío', () => {
      const input = [];
      const expectedOutput = 0;
      expect(subsecuenciaCrecienteMasLarga(input)).toBe(expectedOutput);
  });
});

// ===== SECCIÓN 3: ESTRUCTURAS COMPLEJAS =====

describe('Ejercicio 5: buscarEnEstructura', () => {
  test('encuentra la clave en objetos anidados', () => {
      const obj = {
          a: 1,
          b: {
              c: 2,
              d: {
                  e: 3,
                  f: 4
              }
          }
      };
      expect(buscarEnEstructura(obj, 'e')).toBe(3);
      expect(buscarEnEstructura(obj, 'f')).toBe(4);
  });

  test('devuelve undefined si la clave no existe', () => {
      const obj = {
          a: 1,
          b: {
              c: 2
          }
      };
      expect(buscarEnEstructura(obj, 'd')).toBeUndefined();
  });
});

describe('Ejercicio 6: crearContadorEspecial', () => {
  test('incrementa el contador evitando números prohibidos', () => {
      const contador = crearContadorEspecial(0, [2, 4]);
      expect(contador.incrementar()).toBe(1);
      expect(contador.incrementar()).toBe(3);
      expect(contador.incrementar()).toBe(5);
  });

  test('no incrementa si todos los siguientes números están prohibidos', () => {
      const contador = crearContadorEspecial(0, [1, 2, 3, 4, 5]);
      expect(contador.incrementar()).toBe(0);
  });
});