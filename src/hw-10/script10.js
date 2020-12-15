/**  Возвращает возможный формат данных выражения, введенного пользователем
 * @return {string} - 'DATE' | 'EMAIL' | 'PHONE' | 'UNKNOWN'
 */
export default function promptUserData() {
  // date in posix
  const rgexDate1 = /[0-9]{4}([-./])(0[1-9]|1[012])([-./])(0[1-9]|1[0-9]|2[0-9]|3[01])/;
  const rgexDate2 = /(0?[1-9]|[12][0-9]|3[01])[-./](0?[1-9]|1[012])[-./]([0-9]{4})/;
  const rgexDate3 = /(0?[1-9]|1[012])[-./](0?[1-9]|[12][0-9]|3[01])[-./]([0-9]{4})/;
  // https://ru.stackoverflow.com/questions/571772/Регулярное-выражение-для-полной-проверки-email
  const rgexEmail = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

  const rgexPhone = /^(\s*)([+(\d])([\d-\s_():=+]{3,})/;

  const input = prompt("Enter your birthdate or email or phone:", "");

  if (rgexDate1.test(input) || rgexDate2.test(input) || rgexDate3.test(input)) {
    return "DATE";
  }
  if (rgexEmail.test(input)) {
    return "EMAIL";
  }
  if (rgexPhone.test(input)) {
    return "PHONE";
  }
  return "UNKNOWN";
}
