import { createUser, createAdmin } from "./script4";
/*
Создайте объект user, содержащий поле name со
значением ‘John’.
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
*Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей.
*/

describe("test function which create and setup object {user}", () => {
  const funcPrompt = window.prompt;
  afterAll(() => {
    window.prompt = funcPrompt;
  });

  describe("create object 'user' and manipulate with him", () => {
    it("returns object 'user' containing field 'name' assigned by 'John'", () => {
      window.prompt = jest.fn(() => 0);
      const user = createUser();
      expect(user.name).toEqual("John");
    });

    ["1", "22", "74", "91"].forEach((num) => {
      it(`tests the number ${num} was prompted and wrote to user.age`, () => {
        window.prompt = jest.fn(() => num);
        const user = createUser();
        expect(user.age).toEqual(+num);
      });
    });
  });
});

describe("test function which clone object 'user' to 'admin' and manipulate him", () => {
  const consoleSpy = jest.spyOn(console, "log");
  /*
  const funcPropmpt = window.prompt;
  afterAll(() => {
    window.prompt = funcPrompt;
  });
*/
  it("tests function createAdmin which clone object 'user' to 'admin' where admin.role ='admin' and does destructuring admin into vars", () => {
    window.prompt = jest.fn(() => "30");
    const admin = createAdmin();
    expect(admin.role).toEqual("admin");
    expect(consoleSpy).toBeCalledWith("John", 30, "admin");
  });
});
