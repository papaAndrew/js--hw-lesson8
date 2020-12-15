/** Возвращает разницу между наибольшим и наименьшим из двух параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function diff(a, b) {
  return Math.abs(a - b);
}

/** Возвращает true, если строка состоит из одного слова и false, если из
 * нескольких.
 * @param {string} s
 * @returns {boolean}
 */
export function isWord(s) {
  // console.log(s, s.split('\s').length);
  return s.split(/\s/).length === 1;
}

/** Возвращает значение параметра a, возведённого в степень x.
 * @param {number} a
 * @param {number} x
 * @returns {boolean}
 */
export function pow(a, x) {
  return a ** x;
}
