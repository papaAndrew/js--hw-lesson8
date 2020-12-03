// Домашнее задание №4 «Объекты»
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

export function createUser() {
  const user = { name: "John" };

  const num = +prompt("Введите число:");
  user.age = num;

  return user;
}

export function createAdmin() {
  const user = createUser();
  const admin = {role: "admin", ...user};

  const { name, age, role } = admin;

  console.log(name, age, role);

  return admin;
}
