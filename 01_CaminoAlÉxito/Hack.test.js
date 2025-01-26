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