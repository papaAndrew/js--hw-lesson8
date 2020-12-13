import { printSum50to100, printTableMultBy7, calcAvgOfOdds } from "./script3";

describe("Test three exersices using cycles and loops", () => {
  /* 1.Вывести в консоль сумму всех целых чисел от 50 до
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

  let consoleSpy = jest.spyOn(console, "log");

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("print into console sum all numbers in range 50 to 100", () => {
    consoleSpy = jest.spyOn(console, "log");
    printSum50to100();
    expect(consoleSpy).toBeCalledWith(3825);
  });

  it(`print into console 9 times`, () => {
    // const consoleSpy = jest.spyOn(console, "log");
    consoleSpy = jest.spyOn(console, "log");
    printTableMultBy7();
    expect(consoleSpy).toHaveBeenCalledTimes(9);
  });
});
/*
describe ("Test result function was output into console", () => {
  var consoleSpy = jest.spyOn(console, "log");
  printTableMultBy7();
  [
    [0, "7 x 1 = 7"],
    [1, "7 x 2 = 14"],
    [2, "7 x 3 = 21"],
    [3, "7 x 4 = 28"],
    [4, "7 x 5 = 35"],
    [5, "7 x 6 = 42"],
    [6, "7 x 7 = 49"],
    [7, "7 x 8 = 56"],
    [8, "7 x 9 = 63"],
  ].forEach((el) => {
    it(`check that value ${el[1]} was output into console by step ${el[0]}`, () => {
      expect(consoleSpy.mock.calls[el[0]]).toEqual(el[1]);
    });
  });
});
*/
/**/
describe("Test the function print into console an average of all odds in range", () => {
  const funcPrompt = window.prompt;

  afterAll(() => {
    window.prompt = funcPrompt;
  });

  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
  ].forEach((el) => {
    it(`check avg(odds) in range [1, ${el[0]}] is ${el[1]}`, () => {
      const consoleSpy = jest.spyOn(console, "log");
      window.prompt = jest.fn(() => el[0]);
      calcAvgOfOdds();
      expect(consoleSpy).toBeCalledWith(el[1]);
    });
  });
});
/**/
