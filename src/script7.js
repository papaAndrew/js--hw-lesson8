/* Домашнее задание №7 «Работа с DOM»
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется.
*/

export default function textInput() {
  // document.querySelector('#input')
  const htmlInput1 = document.querySelector("#input1");
  console.log(htmlInput1);

  const htmlButton1 = document.querySelector("#button1");
  console.log(htmlButton1);

  htmlButton1.hidden = htmlInput1.value === "";
}

// export function buttonClick() {}
