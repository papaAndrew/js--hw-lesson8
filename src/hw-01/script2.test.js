import printConcatLength from "./script2";
/* 2.В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках.
*/

describe("test function printConcatLength", () => {
  it("do output into console.log with two strings", () => {
    const s1 = "Hello";
    const s2 = "World!";

    const consoleSpy = jest.spyOn(console, "log");
    printConcatLength(s1, s2);
    expect(consoleSpy).toBeCalledWith(11);
  });

  it("do output into console.log with strings and number", () => {
    const s1 = "Hello";
    const s2 = 0;

    const consoleSpy = jest.spyOn(console, "log");
    printConcatLength(s1, s2);
    expect(consoleSpy).toBeCalledWith(NaN);
  });
});
