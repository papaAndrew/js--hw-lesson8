import { printWeekDay, printTodayMinutes, whoIsYanger } from "./script8";
/** Домашнее задание №8 «Работа с датами»
 * 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 * Напишите программу, выводящую день недели по введённой дате.
 * 2.Написать программу, которая выводит в консоль количество минут,
 * прошедшее с начала сегодняшнего дня.
 * 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
 * Написать программу, которая определяет более молодого пользователя.
 *
 */
describe("manipulations with dates", () => {
  /** 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
   * Напишите программу, выводящую день недели по введённой дате.
   */
  describe("print week day for prompted date value into console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const funcPropmpt = window.prompt;

    afterAll(() => {
      window.prompt = funcPropmpt;
    });

    [
      ["07.12.2020", "понедельник"],
      ["08.12.2020", "вторник"],
      ["09.12.2020", "среда"],
      ["10.12.2020", "четверг"],
      ["11.12.2020", "пятница"],
      ["12.12.2020", "суббота"],
      ["13.12.2020", "воскресенье"],
      ["04.01.2021", "понедельник"],
    ].forEach((item) => {
      it(`claims that weekday of ${item[0]} is ${item[1]}`, () => {
        window.prompt = jest.fn(() => item[0]);
        printWeekDay();
        expect(consoleSpy).toBeCalledWith(item[1]);
      });
    });
  });

  /** 2.Написать программу, которая выводит в консоль количество минут,
   * прошедшее с начала сегодняшнего дня.
   */
  describe("print minutes from today's begining into console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const date = new Date();
    const minutes = 60 * date.getHours() + date.getMinutes();

    it(`claims now ${minutes} minutes passed from begining of today`, () => {
      printTodayMinutes();
      expect(consoleSpy).toBeCalledWith(minutes);
    });
  });

  /** 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
   * Написать программу, которая определяет более молодого пользователя.
   */
  describe("calculates yangest of two users using their known birthdates", () => {
    [
      ["31.12.1999", "01.01.2000", "01.01.2000", "second yanger"],
      ["01.02.2000", "02.01.2000", "01.02.2000", "first yanger"],
      ["29.02.2020", "01.03.2020", "01.03.2020", "second yanger"],
      ["01.01.2021", "01.01.2021", "COEVALS", "both coevals"],
    ].forEach((item) => {
      it(`between two users whose b.d. are ${item[0]} and ${item[1]} - ${item[3]}`, () => {
        expect(whoIsYanger(item[0], item[1])).toBe(item[2]);
      });
    });
  });
});
