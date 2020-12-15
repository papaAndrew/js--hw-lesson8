/** Выводит в консоль сумму всех элементов массива.Создайте массив целых чисел
 * из 10 элементов.
 * @returns {Array.<number>} - ten elements
 */
export function createArray() {
  const arrTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const summator = (result, thisValue) => result + thisValue;

  console.log(arrTen.reduce(summator, 0));

  return arrTen;
}

/** Создает новый массив на основе исходного, в котором каждый элемент
 * вдвое больше элемента исходного массива с таким же индексом.
 * @returns {Array.<number>} - modified array
 */
export function createArrayByTemplate() {
  return createArray().map((item) => 2 * item);
}

/** Выводит в консоль наибольший и наименьший элементы исходного массива.
 */
export function printExtremum() {
  let minVal = 0;
  let maxVal = 0;

  const arrExtrem = createArray().sort((a, b) => a - b);

  [minVal] = arrExtrem;
  maxVal = arrExtrem[arrExtrem.length - 1];

  console.log(minVal, maxVal);
}
