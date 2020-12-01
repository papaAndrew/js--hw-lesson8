// 1.Вывести в консоль сумму всех целых чисел от 50 до 100.
export function printSum50to100() {
  let result = 0;
  for (let i = 50; i <= 100; i += 1) {
    result += i;
  }
  console.log(result);
}

/* 2.Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
*/
export function printTableMultBy7() {
  const seven = 7;
  for (let i = 1; i < 10; i += 1) {
    const res = seven * i;
    console.log(`${seven} x ${i} = ${res}`);
  }
}

// export function calcAvgOfOdds() {}
