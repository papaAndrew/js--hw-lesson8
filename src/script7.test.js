import { addForm, addContent } from "./script7";

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

describe("addForm", () => {
  let divForm;
  let divContent;
  let input;
  let button;

  beforeAll(() => {
    divForm = document.createElement("div");
    divForm.id = "form";
    document.body.appendChild(divForm);

    divContent = document.createElement("div");
    divContent.id = "content";
    document.body.appendChild(divContent);
  });

  it("checks addForm adds elements 'input' and 'button' into div", () => {
    addForm(divForm);
    // input expected
    expect(divForm.querySelector("input")).toBeDefined();
    // button expected
    expect(divForm.querySelector("button")).toBeDefined();
  });

  it("checks addContent add 3 Paragraphs into div", () => {
    addContent(divContent);
    expect(divContent.querySelectorAll("p").length).toBe(3);
  });

  describe("test event handlers", () => {
    beforeAll(() => {
      addForm(divForm);
      input = divForm.querySelector("input");
      button = divForm.querySelector("button");
    });

    it("checks button is invisible after creation", () => {
      //      console.log(`here 1 ${  button}`);
      expect(button.hidden).toBe(true);
    });

    it("checks button comes to visible if somebody printed some value to input", () => {
      input.value = "0";
      input.dispatchEvent(new Event("input"));
      expect(button.hidden).toBe(false);
    });

    it("checks button disappears if input have no value", () => {
      input.value = "";
      input.dispatchEvent(new Event("input"));
      expect(button.hidden).toBe(true);
    });

    it("checks button appears again if input had a value", () => {
      input.value = new Date();
      input.dispatchEvent(new Event("input"));
      expect(button.hidden).toBe(false);
    });
  });

  describe("checks button click adds new p. If count of p comes more than 5, first p must be deleted", () => {
    /* для выполнения этого теста необходимо отключить в eslint rule "no-loop-func"
     */

    beforeAll(() => {
      addForm(divForm);
      input = divForm.querySelector("input");
      button = divForm.querySelector("button");
    });

    for (let i = 4; i < 10; i += 1) {
      let caption;
      let ps;

      it(`appends new paragraph ${i}: text move from input into new p then clean input`, () => {
        caption = `Paragraph #${i}`;
        input.value = caption;
        input.dispatchEvent(new Event("input"));
        button.dispatchEvent(new Event("click"));
        ps = divContent.querySelectorAll("p");

        expect(input.value).toBe("");
        expect(ps[ps.length - 1].innerHTML).toBe(caption);
      });

      switch (i) {
        case 4:
        case 5:
          it(`count of p must be ${i}`, () => {
            expect(ps.length).toBe(i);
          });
          break;
        case 8:
        case 9:
          it(`push old paragraphs. count of p must be 5`, () => {
            // На первом месте должен оказаться текст текст Параграф (i - 4)
            const j = i - 4;
            const firstP = `Paragraph #${j}`;
            expect(ps[0].innerHTML).toBe(firstP);
            expect(ps.length).toBe(5);
          });
          break;
        default:
          it(`count of p must be 5`, () => {
            expect(ps.length).toBe(5);
          });
      }
    }
  });
});
