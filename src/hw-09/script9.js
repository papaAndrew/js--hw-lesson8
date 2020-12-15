/** Определяет, является ли треугольник прямоугольным.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean} - true, если треугольник  является прямоугольным.
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

/** Выведет в консоль длину окружности и площадь круга с радиусом R,
 * заданный пользователем.
 */
export function printCircleSize() {
  const r = Number(prompt("Enter num R:"));
  const circumference = 2 * r * Math.PI;
  const area = Math.PI * r ** 2;

  console.log(circumference);
  console.log(area);
}

/** Выводит корни квадратного уравнения с коэффициентами a, b и c,
 * заданными пользователем.
 */
export function printRootsOfQEquation() {
  const a = Number(prompt("a ="));
  const b = Number(prompt("b ="));
  const c = Number(prompt("c ="));
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
