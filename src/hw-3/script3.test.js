import { printSum50to100, printTableMultBy7 } from "./script3";

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
  it("print into console sum all numbers in range 50 to 100", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printSum50to100();
    expect(consoleSpy).toBeCalledWith(3825);
  });

  it(`print into console 9 times`, () => {
    // const consoleSpy = jest.spyOn(console, "log");
    printTableMultBy7();
    expect(jest.spyOn(console, "log")).toHaveBeenCalledTimes(10);
  });
});
