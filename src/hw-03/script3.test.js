import { printSum50to100, printTableMultBy7, calcAvgOfOdds } from "./script3";
/* Домашнее задание №3 «Циклы»
1.Вывести в консоль сумму всех целых чисел от 50 до
100.
2.Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N.
*/
let consoleSpy;

afterEach(() => {
  consoleSpy.mockRestore();
});

describe("Test three exersices using cycles and loops", () => {
  it("print into console sum all numbers in range 50 to 100", () => {
    consoleSpy = jest.spyOn(console, "log");
    printSum50to100();
    expect(consoleSpy).toBeCalledWith(3825);
    consoleSpy.mockRestore();
  });

  it(`print into console 9 times`, () => {
    consoleSpy = jest.spyOn(console, "log");
    printTableMultBy7();
    expect(consoleSpy).toHaveBeenCalledTimes(9);
  });
});

describe("Test the function print into console an average of all odds in range", () => {
  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
  ].forEach((el) => {
    it(`check avg(odds) in range [1, ${el[0]}] is ${el[1]}`, () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => el[0]);
      consoleSpy = jest.spyOn(console, "log");

      calcAvgOfOdds();
      expect(consoleSpy).toBeCalledWith(el[1]);
      consoleSpy.mockRestore();
    });
  });
});
