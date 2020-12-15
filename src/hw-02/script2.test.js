import { printMaxOfCouple, printMonth, isCircleInSquare } from "./script2";
/* Домашнее задание №2 «Условия»
1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
2.Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат.
*/

describe("test functions how they works", () => {
  it("do output into console.log max of (221, 256)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printMaxOfCouple();
    expect(consoleSpy).toBeCalledWith(256);
    consoleSpy.mockRestore();
  });

  describe("do output into console.log month's name user input a number of", () => {
    [
      ["0", "undefined"],
      ["1", "январь"],
      ["2", "февраль"],
      ["3", "март"],
      ["4", "апрель"],
      ["5", "май"],
      ["6", "июнь"],
      ["7", "июль"],
      ["8", "август"],
      ["9", "сентябрь"],
      ["10", "октябрь"],
      ["11", "ноябрь"],
      ["12", "декабрь"],
      ["13", "undefined"],
    ].forEach((el) => {
      it(`check whether the value ${el[0]} is number of month ${el[1]}`, () => {
        jest.spyOn(global.window, "prompt").mockImplementation(() => el[0]);
        const consoleSpy = jest.spyOn(console, "log");

        printMonth();
        expect(consoleSpy).toBeCalledWith(el[1]);
        consoleSpy.mockRestore();
      });
    });
  });

  describe("function returns true when circle can inplace into square", () => {
    const pi = 3.14158;
    [
      [2, 2, true],
      [1, 2, true],
      [2, 1, false],
      [1001, 1000.99, false],
      [1000.99, 1001, true],
    ].forEach((el) => {
      it(`is ${el[2]} if circle whose diameter is ${el[0]} can be inplaced in square whose side is ${el[1]}`, () => {
        // площадь круга
        const radius = 0.5 * el[0];
        const circle = pi * radius ** 2;
        // площадь квадрата
        const square = el[1] ** 2;
        expect(isCircleInSquare(circle, square)).toBe(el[2]);
      });
    });
  });
});
