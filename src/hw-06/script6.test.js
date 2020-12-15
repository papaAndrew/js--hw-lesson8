import { diff, isWord, pow } from "./script6";
/* Домашнее задание №6 «Функции»
1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
*Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x.
*/

describe("test functions", () => {
  describe("returns defference between max and min of two args", () => {
    [
      [0, 0, 0],
      [2, 2, 0],
      [0, 1, 1],
      [9, 1, 8],
      [-3, 2, 5],
      [4, -5, 9],
      [-6, -7, 1],
    ].forEach((item) => {
      const a = item[0];
      const b = item[1];
      const res = item[2];

      it(`claims that defference between max and min of (${a}, ${b}) is ${res}`, () => {
        expect(diff(a, b)).toBe(res);
      });
    });
  });

  describe("function returns true if an argument contains only one word", () => {
    [
      ["1", true],
      ["1 2", false],
      ["one_word", true],
      ["two words", false],
      ["name@domain.ru", true],
      ["This sentense contains a lot of words", false],
    ].forEach((item) => {
      const s = item[0];
      const res = item[1];
      it(`is ${res} that value "${s}" contains only one word`, () => {
        expect(isWord(s)).toBe(res);
      });
    });
  });

  describe("function returns result of math power operation", () => {
    [
      [-1, 2, 1],
      [-1, -1, -1],
      [-1, 3, -1],
      [-1, -3, -1],
      [-2, 2, 4],
      [-2, -2, 0.25],
      [-2, 3, -8],
      [4, -2, 0.0625],
      [0, 0, 1],
      [0, 3, 0],
      [0, -3, Infinity],
      [1, 0, 1],
      [1, 3, 1],
      [1, -3, 1],
      [2, 1, 2],
      [2, 2, 4],
      [4, 0.5, 2],
      [2, 8, 256],
      [3, 2, 9],
      [9, 0.5, 3],
      [10, 4, 10000],
      [10000, 0.25, 10],
    ].forEach((item) => {
      const a = item[0];
      const x = item[1];
      const res = item[2];
      it(`claims that ${a} to the power of ${x} equals ${res}`, () => {
        expect(pow(a, x)).toBeCloseTo(res);
      });
    });
  });
});
