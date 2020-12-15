/** Обработчик события input для элемента input
 * Скрывает кнопку скрыта, если в поле ввода input нет значения
 */
export function inputInput() {
  const input = document.querySelector("#input1");
  document.querySelector("#button1").hidden = input.value === "";
}

/** Обработчик события click для элемента button
 * При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.
 * Если параграфов становится больше 5, первый из них удаляется.
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

/** Добавляет в раздел три текстовых параграфа.
 * @param {HTMLDivElement} div
 */
export function addContent(div) {
  for (let i = 1; i <= 3; i += 1) {
    const p = document.createElement("p");
    p.innerHTML = `Paragraph #${i}`;
    div.appendChild(p);
  }
}

/** Добавляет в раздел поле ввода и кнопка.
 * @param {HTMLDivElement} div
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
