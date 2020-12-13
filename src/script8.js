/** Домашнее задание №8 «Работа с датами»
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 * Напишите программу, выводящую день недели по введённой дате.
 * 2.Написать программу, которая выводит в консоль количество минут,
 * прошедшее с начала сегодняшнего дня.
 * 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
 * Написать программу, которая определяет более молодого пользователя.
 */

/** Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 * Напишите программу, выводящую день недели по введённой дате.
 */
export function printWeekDay() {
  const str = prompt("ДД.ММ.ГГГГ");
  // let parts = str.split(".");
  // let date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

  const posix = str.split(".").reverse().join("-");
  const date = new Date(posix);

  // const result = new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(
  //   date
  // );   - возвращает дерьмо
  const result = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ][date.getDay()];

  console.log(result);
}

/** 2.Написать программу, которая выводит в консоль количество минут,
 * прошедшее с начала сегодняшнего дня.
 */
export function printTodayMinutes() {
  /* для разнообразия, посчитаем как разницу между текущим временем и началом дня */

  const today = new Date();
  const stop = today.getTime();
  const start = today.setHours(0, 0, 0, 0);
  const result = Math.floor((0.001 * (stop - start)) / 60);
  console.log(result);
}

/** 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
 * Написать программу, которая определяет более молодого пользователя.
 */
export function whoIsYanger(user1, user2) {
  const date1 = new Date(user1.split(".").reverse().join("-"));
  const date2 = new Date(user2.split(".").reverse().join("-"));

  if (date1.getTime() > date2.getTime()) {
    return user1;
  }
  if (date1.getTime() < date2.getTime()) {
    return user2;
  }
  return "COEVALS";
}
