/* const height = 5642.71;
let heightStr = height.toString();
 0
console.log(heightStr);
heightStr = heightStr.slice(0, 4);
console.log(heightStr);

const str = "   Не хочу учить JavaScript   ";
console.log(str.trim().toUpperCase().slice(3));

function drawRoof() {
  console.log("   _____");
  console.log(" /      \\");
  console.log("+--------+");
}

function drawFloor() {
  console.log("|         |");
  console.log("+---------+");
}

drawRoof();
drawFloor();
drawFloor();
drawFloor();
drawFloor();

function printRow(x) {
  console.log(
    `${x * 1} ${x * 2} ${x * 3} ${x * 4} ${x * 5} ${x * 6} ${x * 7} ${x * 8} ${
      x * 9
    }`,
  );
}

for (let i = 1; i < 10; i++) {
  printRow(i);
}

// function sayHello(name, language = "ru", symbol = "!") {
//   const hello = language === "en" ? "Hello" : "Привет";
//   console.log(`${hello}, ${name}${symbol}`);
// }
//
// sayHello("Андрей", "en", "."); // Выведет "Hello, Андрей."
// sayHello("Андрей"); // Выведет "Привет, Андрей!"

function calculateDelivery(distance, deliveryType = "standard", isGift = true) { let totalDeliveryCost = distance * 5;
  deliveryType === "express" ? totalDeliveryCost * 1.3 : totalDeliveryCost;
  totalDeliveryCost = isGift ? totalDeliveryCost + 15 : totalDeliveryCost;
  console.log(totalDeliveryCost);
}

calculateDelivery(5);
calculateDelivery(7, "standard", true);
calculateDelivery(10, "express", false);

function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return "Строки равны по длине";
  }
}

console.log(compareStrings("JavaScript", "Java"));
console.log(compareStrings("Java", "Ruby"));

const phases = 3; // количество фаз
const weeks = 3; // количество недель в фазе
const weekDays = 5; // количество рабочих дней в неделе
const totalDays = weekDays * weeks * phases;

for (let i = 0; i < totalDays; i++) {
  console.log("Новый день практики в Эльбрусе!");
}

for (let i = 0; i < 7; i++) {
  if (i < 5) {
    console.log(`${i}. Пишем код`);
  } else {
    console.log(`${i}. Отдыхаем`);
  }
}

// Используя цикл for выведите на экран квадраты четных чисел от 1 до 10

function isEven(number) {
  return number % 2 === 0;
}

function doSquare(number) {
  return number * number;
}

for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    console.log(doSquare(i));
  }
}

// let counter = 0;
// for (let y = 0; y < 4; y++) {
//   for (let x = 0; x < 2; x++) {
//     console.log(`${counter}. x`);
//     counter++;
//   }
//   console.log(`${counter}. y`);
//   counter++;
// }

for (let i = 1; i < 11; i++) {
  if (i % 3 === 0) {
    console.log(`${i - 1}. y`);
  } else {
    console.log(`${i - 1}. x`);
  }
}

for (let i = 0; i < 10; i++) {
  const char = i % 3 === 2 ? "y" : "x";
  console.log(char);
} */

/* const str = "Эльбрус";

for (let i = 0; i < str.length; i++) {
  console.log(`${i}. ${str[i]}`);
} */

// Функция reverse, которая принимает на вход строку и переворачивает ее используя цикл
/*
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("Москва"));

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("Москва")); */
/*
const str =
  "составить новую строку, которая содержит только гласные из старой строки";

function vowels(string) {
  const vowels = "аеёиоуыэюя";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}

function vowelsSolarLint(string) {
  const vowels = "аеёиоуыэюя";
  let result = "";
  for (const element of string) {
    if (vowels.includes(element)) {
      result += element;
    }
  }
  return result;
}
s
console.log(vowels(str));

function extractVowels(str) {
  const vowels = "аеёиоуыэюя";
  return [...str].filter((c) => vowels.includes(c)).join("");
}

console.log(extractVowels("Москва"));
console.log(extractVowels("Северный Кавказ"));

let a = 1;
let b = 2;

console.log(a++ + b--);
console.log(a++ + b--);

function deleteSpaces(string) {
  return string.replace(/ /g, "!");
}

function deleteSpacesSplit(string) {
  return string.split(" ").join("+");
}

function deleteSpacesFilter(string) {
  return string
    .split("")
    .filter((char) => char !== " ")
    .join("");
}

console.log(deleteSpaces("Javascript is awesome"));
console.log(deleteSpacesSplit("Javascript is awesome"));
console.log(deleteSpacesFilter("Javascript is awesome"));

/!* Задача: Написать функцию, которая возвращает сумму всех
делителей числа n, кроме самого числа.
Например, если n = 12, то функция возвращает 1 + 2 + 3 + 4 + 6 = 16 *!/

function sumDivisors(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
} */

/* Теперь, используя код из предыдущей задачи, нужно написать функцию,
 * которая возвращает trueб если число совершенное, и false, если оно не
 * совершенное. Совершенным числом называется такое число, которое
 *  равно сумме всех своих делителей (кроме него самого).
 * Например 6 - совершенное число, т.к. 6 = 1 + 2 + 3

function isPerfect(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}

console.log(isPerfect(6));
*/

// Вывести числа от 1 до 100, пропуская 13, 18, 45

/* for (let i = 1; i <= 100; i++) {
  if (i === 13 || i === 18 || i === 45) {
    continue;
  }
  console.log(i);
} */

/* Написать функцию printfirstword, которая найдет первое слово
 * в строке и выведет его на экран. Первым словом считаются все
 * символы, до первого пробела. */
/*
function printFirstWord(str) {
  let firstWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      break;
    }
    firstWord += str[i];
  }
  console.log(firstWord);
}

function printFirstWordSplit(str) {
  const firstWord = str.split(" ")[0];
  console.log(firstWord);
}
printFirstWord("JavaScript не так уж сложен");
printFirstWord("Раз два три");

printFirstWordSplit("JavaScript не так уж сложен");
printFirstWordSplit("Раз два три");

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));

function foo(a, b) {
  let res = console.log(a + b);
  console.log(res);
}

foo(1, 2);

const yArray = ["y", "y", "y", "y", "y", "y", "y", "x", "y", "y", "y", "y"];

let xIndex;

// Находим индекс элемента равного 'x' с помощью цикла for
for (let i = 0; i < yArray.length; i++) {
  if (yArray[i] === "x") {
    xIndex = i;
    break; // Прерываем цикл, как только найден элемент 'x'
  }
}

// Используем метод splice для удаления элемента с найденным индексом
yArray.splice(xIndex, 1);

console.log(yArray);

const numbers = [0, 1, 2, 3, "x", 5, 6, 7, 8, 9, "x", 11, 12, 13, 14];

let firstXIndex;
let secondXIndex;

// Находим индексы первого и второго 'x' с помощью цикла for
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === "x") {
    firstXIndex = i;
  } else {
    secondXIndex = i;
    break; // Прерываем цикл, как только найдены оба 'x'
  }
}

console.log(firstXIndex);
console.log(secondXIndex);

function pattern(n) {
  var output = [];
  for (let i = 0; i > n; i++) {
    output.
  }
  return output;
}

console.log(pattern(8));
*/
function getDaysCollectMoney(target, salary) {
  let money = 0;
  let day = 1;

  while (money < target) {
    if (day % 7 === 6 || day % 7 === 0) {
      day++;
      continue;
    }
    money += salary;
    day++;
  }
  return day;
}

console.log(getDaysCollectMoney(60_000, 5_000));

// Используя цикл while выведите в консоль все квадраты
// натуральных чисел (1, 4, 9, 16, и т.д.), которые меньше 100.

// let number = 1;
// while (number * number < 100) {
//   console.log(number * number);
//   number++;
// }

function lcm(a, b) {
  let max = a < b ? b : a;

  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

console.log(lcm(3, 5));

const cat = {
  name: 'Michel',
  'is happy': true,
  'is-grumpy': true,
};

console.log(cat);
console.log(cat['is-grumpy']);

const propertyName = 'isBeautiful';
cat[propertyName] = true;
cat.isUgly = true;

console.log(cat);

const books = [];

books.push('Сильмариллион');
books.unshift('Хоббит');
books.push('Сами боги');
books.shift();
books.shift();
books.push('Ложная слепота');
books.push('История твоей жизни');

console.log(books.length, books);

function isPerfect(n) {
  let result = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result === n;
}

console.log(isPerfect(6));

let a = 1;
let b = a; // копируем значение переменной а
a += 1; // увеличим а на 1
console.log(a, b);

const e = { title: 'Эльбрус Буткемп' };
const l = e;
e.title = 'Elbrus bootcamp';
console.log(e.title, l.title);

const oak = {
  name: 'Дуб зелёный',
  age: 100,
  features: ['златая цепь', 'кот учёный'],
};

console.log(oak);

for (let key in oak) {
  console.log(oak[key]);
}

/* Вам дан массив, где среди игреков (y) затесался один икс (x).
    Нужно удалить этот икс из массива. Сначала с помощью цикла for
    найдите индекс элемента, равного 'x', а затем используйте метод
    splice для удаления этого элемента.
    В конце концов выведите массив yArray в консоль. */

/* const numbers = [0, 1, 2, 3, "x", 5, 6, 7, 8, 9, "x", 11, 12, 13, 14];

let firstXIndex;
let secondXIndex;

for (let key in numbers) {
  if (numbers[key] === "x") {
    if (firstXIndex === undefined) {
      firstXIndex = key;
    } else {
      secondXIndex = key;
    }
  }
}
console.log(firstXIndex, secondXIndex);

const numbersPart = numbers.slice(Number(firstXIndex) + 1, secondXIndex);

console.log(numbersPart);

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
}); */

const numbers = [-1, 44, 90, 33, 201, 113, 56, 30, 888];

const odds = [];

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});

console.log(odds);

const oddsFilter = numbers.filter((number) => number % 2 !== 0);

console.log(oddsFilter);

const fruits = ['apple', 'banana', 'orange'];
function scream(strings) {
  return strings.map((strings) => strings.toUpperCase());
}

console.log(scream(fruits));

function areAllPositive(numbers) {
  let allPositive = true;
  numbers.forEach((number) => {
    if (number < 0) {
      allPositive = false;
    }
  });
  return allPositive;
}

console.log(areAllPositive(numbers));

function areAllPositiveEvery(numbers) {
  return numbers.every((number) => number > 0);
}

console.log(areAllPositiveEvery(numbers));

const testNumbers = [5, -10, 1, 22, 8, 7];
function findFirstNumberBetweenLame(numbers, start, end) {
  let searchNumber;
  numbers.forEach((number) => {
    if (number > start && number < end) {
      searchNumber = number;
    }
  });
  return searchNumber;
}

console.log(findFirstNumberBetweenLame(testNumbers, 0, 3));

function findFirstNumberBetween(numbers, start, end) {
  return numbers.find((number) => number > start && number < end);
}

console.log(findFirstNumberBetween(testNumbers, 0, 3));

function positiveSquares(numbers) {
  return numbers
    .filter((number) => number >= 0)
    .map((number) => number * number);
}
console.log(positiveSquares([-10, 0, 10]));

function isAnagram(string2, string2) {
  return (
    string1.split('').sort().join('') === string2.split('').sort().join('')
  );
}
console.log('sad');

console.log('2');

// //!* Задача: Написать функцию, которая возвращает сумму всех
// делителей числа n, кроме самого числа.
// Например, если n = 12, то функция возвращает 1 + 2 + 3 + 4 + 6 = 16 *!/
//
//
// /* Теперь, используя код из предыдущей задачи, нужно написать функцию,
//  * которая возвращает trueб если число совершенное, и false, если оно не
//  * совершенное. Совершенным числом называется такое число, которое
//  *  равно сумме всех своих делителей (кроме него самого).
//  * Например 6 - совершенное число, т.к. 6 = 1 + 2 + 3
// /// comment
//
