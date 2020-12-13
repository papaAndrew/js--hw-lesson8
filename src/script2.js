export function printMaxOfCouple() {
  /* 1.В переменных a и b хранятся числа. Вывести в консоль наибольшее из них
   */
  const a = 221;
  const b = 256;

  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
  // или так
  //    console.log(Math.max(a, b));
}

export function printMonth() {
  /* 2.Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).
*/
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

  const num = +prompt("Введите номер месяца (1 - 12): ", "");

  console.log(`${months[num - 1]}`);
}
// printMonth();

export function isCircleInSquare(circle, square) {
  /* *В переменных circle и square хранятся площади круга и квадрата соответственно.
Написать программу, которая определяет, поместится ли круг в квадрат.
*/
  const pi = 3.14158;
  // s = pi * r**
  const diameter = 2 * Math.sqrt(circle / pi);
  const side = Math.sqrt(square);

  return side >= diameter;
}
