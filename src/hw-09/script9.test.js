import {
  isTriangleRight,
  printCircleSize,
  printRootsOfQEquation,
} from "./script9";

/* Домашнее задание №9 «Математические операции»
1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.
2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R.
*Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c.
*/

describe("is Triangle Right", () => {
  [
    [1, 1, 1, false, "not rectangular"],
    [1, 1, 2, false, "not rectangular"],
    [2, 8, 2, false, "not rectangular"],
    [4, 2, 2, false, "not rectangular"],
    [3, 4, 5, true, "rectangular"],
    [1, 1, Math.SQRT2, true, "rectangular"],
    [2, Math.sqrt(13), 3, true, "rectangular"],
    [Math.sqrt(25 + 36), 5, 6, true, "rectangular"],
  ].forEach((item) => {
    it(`triangle with sides (${item[0]}, ${item[1]}, ${item[2]}) is ${item[4]}`, () => {
      expect(isTriangleRight(item[0], item[1], item[2])).toBe(item[3]);
    });
  });
});

describe("calculate circumference and area of circle using prompted radius", () => {
  let consoleSpy;

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  [
    [1, 2 * Math.PI, Math.PI],
    [2, 4 * Math.PI, 4 * Math.PI],
    [10, 20 * Math.PI, 100 * Math.PI],
  ].forEach((item) => {
    it(`circle radius is ${item[0]} so circumference is ${item[1]} and area is ${item[2]}`, () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => item[0]);
      consoleSpy = jest.spyOn(console, "log");

      printCircleSize();

      expect(consoleSpy.mock.calls[0][0]).toBeCloseTo(item[1]);
      expect(consoleSpy.mock.calls[1][0]).toBeCloseTo(item[2]);
      consoleSpy.mockRestore();
    });
  });
});

describe("print roots of a quadratic equation with prompted coefficients", () => {
  let consoleSpy;

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  [
    [1, -8, 12, 6, 2, 16],
    [5, 3, 7, undefined, undefined, -131],
    [1, -6, 9, 3, undefined, 0],
  ].forEach((item) => {
    const [a, b, c, x1, x2, d] = item;
    it(`if a = ${a}, b = ${b}, c = ${c} then x1 = ${x1}, x2 = ${x2}, D = ${d}`, () => {
      consoleSpy = jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => a)
        .mockImplementationOnce(() => b)
        .mockImplementationOnce(() => c);

      printRootsOfQEquation();

      expect(consoleSpy.mock.calls[0][0]).toBe(x1);
      expect(consoleSpy.mock.calls[1][0]).toBe(x2);
      expect(consoleSpy.mock.calls[2][0]).toBe(d);

      consoleSpy.mockRestore();
    });
  });
});
