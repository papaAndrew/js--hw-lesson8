import { createArray, createArrayByTemplate, printExtremum } from "./script5";

describe("test functions creates an array and does some operations with it", () => {
  let arr;

  it("claims that function print to console a value 45", () => {
    /* Создайте массив целых чисел из 10 элементов.
    1.Выведите в консоль сумму всех элементов массива.
    */
    const consoleSpy = jest.spyOn(console, "log");
    arr = createArray();
    expect(consoleSpy).toBeCalledWith(45);
  });

  it("claims that function print to console values: 0, 18", () => {
    /* 2.Создайте новый массив на основе исходного, в
    котором каждый элемент будет вдвое больше
    элемента исходного массива с таким же индексом.
    (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
    массив).
    3.*Найдите и выведите в консоль наибольший и
    наименьший элементы исходного массива.
    */
    const consoleSpy = jest.spyOn(console, "log");
    // const consoleSpy = jest.spyOn(console, "log");
    printExtremum(createArrayByTemplate(arr));
    expect(consoleSpy).toBeCalledWith(0, 18);
  });
});
