/** Выводит в консоль наибольшее из двух чисел
 */
export function printMaxOfCouple() {
  const a = 221;
  const b = 256;

  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

/** Выводит в консоль название месяца, соответствующее запрошенному у пользователя числу (1 — январь, 2 — февраль и т.д.).
 */
export function printMonth() {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const num = Number(prompt("Введите номер месяца (1 - 12): ", ""));
  console.log(`${months[num - 1]}`);
}

/** Определяет, поместится ли круг в квадрат, если известны их площади.
 * @param {number} circle
 * @param {number} square
 * @returns {boolean} - true, если поместится
 */
export function isCircleInSquare(circle, square) {
  const pi = 3.14158;
  // s = pi * r**
  const diameter = 2 * Math.sqrt(circle / pi);
  const side = Math.sqrt(square);

  return side >= diameter;
}
