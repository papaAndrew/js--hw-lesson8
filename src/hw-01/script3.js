/** Запрашивает у пользователя ввод трёхзначного числа,
 *  выводит в консоль сумму цифр введённого числа
 */
export default function printSummary() {
  const input = prompt("Введите трехзначное число");
  let result = 0;

  input.split("").forEach((c) => {
    result += Number(c);
  });

  console.log(result);
}
