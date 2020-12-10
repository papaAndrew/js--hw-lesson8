/* Домашнее задание №9 «Математические операции»
1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.
2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R.
*Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c.
*/
/** 1.Даны длины трёх сторон треугольника. Определить,
 * является ли треугольник прямоугольным.
 * @param a
 * @param b
 * @param c
 */
export function isTriangleRight(a, b, c) {
  /* В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов */
  const a2 = a * a;
  const b2 = b * b;
  const c2 = c * c;

  return (
    a === Math.sqrt(b2 + c2) ||
    b === Math.sqrt(a2 + c2) ||
    c === Math.sqrt(a2 + b2)
  );
}

/** 2.Пользователь вводит число R. Написать программу,
 * которая выведет в консоль длину окружности и площадь круга с радиусом R.
 */
export function printCircleSize() {
  const r = +prompt("Enter num R:");
  const circumference = 2 * r * Math.PI;
  const area = Math.PI * r ** 2;

  console.log(circumference);
  console.log(area);
}

/** Пользователь вводит числа a, b и c.
 * Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.
 */
export function printRootsOfQEquation() {
  const a = +prompt("a =");
  const b = +prompt("b =");
  const c = +prompt("c =");
  // корни
  let x1;
  let x2;
  // дискриминант
  const d = b * b - 4 * a * c;
  // корни
  if (d >= 0) {
    x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    if (d > 0) {
      x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
    }
  }
  console.log(x1);
  console.log(x2);
  console.log(d);
}
