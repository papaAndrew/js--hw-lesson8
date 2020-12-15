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
let consoleSpy;
afterEach(() => {
  consoleSpy.mockRestore();
});

describe("manipulations with dates", () => {
  describe("print week day for prompted date value into console", () => {
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
        jest.spyOn(global.window, "prompt").mockImplementation(() => item[0]);
        consoleSpy = jest.spyOn(console, "log");

        printWeekDay();

        expect(consoleSpy).toBeCalledWith(item[1]);
      });
    });
  });

  describe("print minutes from today's begining into console", () => {
    const RealDate = Date;

    afterAll(() => {
      global.Date = RealDate;
    });

    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 0, 60],
      [10, 30, 630],
      [23, 59, 1439],
    ].forEach((item) => {
      const [hours, minutes, result] = item;
      it(`claims that ${result} minutes passed from 00:00 to ${hours}:${minutes}`, () => {
        consoleSpy = jest.spyOn(console, "log");
        jest
          .spyOn(global.Date.prototype, "getHours")
          .mockImplementation(() => hours);
        jest
          .spyOn(global.Date.prototype, "getMinutes")
          .mockImplementation(() => minutes);

        printTodayMinutes();

        expect(consoleSpy).toBeCalledWith(result);
      });
    });
  });

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
