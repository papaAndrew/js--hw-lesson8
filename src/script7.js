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
Import-Module posh-git
$ static
*/
/** Напишите скрипт,
 * который будет выполнять следующие условия:
 * 1.Кнопка скрыта, если в поле ввода нет значения
 */
export function inputInput() {
  const input = document.querySelector("#input1");
  // console.log(input.value);
  document.querySelector("#button1").hidden = input.value === "";
  // console.log(document.querySelector("#button1").hidden);
}

/** 2.При клике на кнопку добавляется новый параграф,
 * содержащий текст из поля ввода.
 * 3.*Если параграфов становится больше 5, первый из них удаляется.
 */
export function buttonClick() {
  const div = document.querySelector("#content");
  const input = document.querySelector("#input1");
  const p = document.createElement("p");
  p.innerHTML = input.value;
  div.appendChild(p);
  if (div.querySelectorAll("p").length > 5) {
    div.removeChild(div.querySelector("p"));
  }
  input.value = "";
  inputInput();
}

/** На странице должны быть три текстовых параграфа [, поле ввода и кнопка].
 *
 * @param
 *   div {HTMLDivElement}
 */
export function addContent(div) {
  for (let i = 1; i <= 3; i += 1) {
    const p = document.createElement("p");
    p.innerHTML = `Paragraph #${i}`;
    div.appendChild(p);
  }
}

/** На странице должны быть [три текстовых параграфа,] поле ввода и кнопка.
 * @param
 *   div {HTMLDivElement}
 */
export function addForm(div) {
  const input = document.createElement("input");
  input.id = "input1";
  // input.data = null;
  input.addEventListener("input", inputInput);
  div.appendChild(input);

  const button = document.createElement("button");
  button.id = "button1";
  button.innerText = "Apply";
  button.addEventListener("click", buttonClick);
  div.appendChild(button);

  inputInput();
}
