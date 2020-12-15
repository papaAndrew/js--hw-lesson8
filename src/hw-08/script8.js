/** Запрашивает у пользователя дату в формате ДД.ММ.ГГГГ.
 * и выводит день недели по введённой дате.
 */
export function printWeekDay() {
  const str = prompt("ДД.ММ.ГГГГ");
  // let parts = str.split(".");
  // let date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

  const posix = str.split(".").reverse().join("-");
  const date = new Date(posix);

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

/** Выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
 */
export function printTodayMinutes() {
  const date = new Date();
  console.log(date);
  const minutes = 60 * date.getHours() + date.getMinutes();

  console.log(minutes);
}

/** Определяет более молодого пользователя из двух, чьи даты рождения
 * заданы двух переменных (константах)
 * @param {string} user1
 * @param {string} user2
 * @returns {string}
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
