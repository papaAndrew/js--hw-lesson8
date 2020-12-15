/** Создает объект user, содержащий поле name со значением ‘John’.
 * в поле age объекта user записывает запрошенное у пользователя значение.
 * @returns {object} - user
 */
export function createUser() {
  const user = { name: "John" };

  const num = +prompt("Введите число:");
  user.age = num;

  return user;
}
/** Создает копию объекта user с именем admin.
 * Добавляет новому объекту поле role со значением ‘admin’.
 * Выводит в консоль все значения полей объекта admin в отдельных переменных. Имена переменных
 * совпадают с названиями полей.
 * @returns {object} - admin
 */
export function createAdmin() {
  const user = createUser();
  const admin = { ...user, role: "admin" };

  const { name, age, role } = admin;

  console.log(name, age, role);

  return admin;
}
