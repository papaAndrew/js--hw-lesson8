import printSummary from "./script3";
/* 3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа
*/

describe("function counts sum of digits in prompted value and prints it into console", () => {
  [
    //    ["000", 0],
    ["111", 3],
    // ["123", 6],
    // ["999", 27],
  ].forEach((item) => {
    it(`claims that sum of digits in value '${item[0]} is ${item[1]}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => item[0]);
      const consoleSpy = jest.spyOn(console, "log");

      printSummary();
      expect(consoleSpy).toHaveBeenCalledWith(item[1]);
      consoleSpy.mockRestore();
    });
  });
});
