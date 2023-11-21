function generateRange(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}

console.log(generateRange(2, 10, 2));

function cycleGo() {
  let string = "";
  for (let i = 20; i >= 0; i -= 4) {
    string += i;
  }
  return (string += "поехали!");
}

console.log(cycleGo());

function trimSpaces(string) {
  return string.replace(/[' ']/g, "");
}

console.log(trimSpaces("Ко с мо сsdasdasd "));

function filterArray(arrStr, num) {
  return arrStr.filter((element) => element.length === num);
}

console.log(
  filterArray(
    ["Коррекция", "Виток", "Воздух", "Газоанализатор", "Температура"],
    6,
  ),
);

function oppositeNumber(number) {
  if (number < 0) {
    return number;
  }
  return -number;
}

console.log(oppositeNumber(-4));
console.log(oppositeNumber(4));

function oppositeNumberTern(number) {
  return number < 0 ? number : -number;
}

function toPower(num, power) {
  power = power ?? 2;
  const res = num ** power;
  return res;
}

function canAccessWebsite(age) {
  return age < 18;
}

//пример вложенной тернарной операции, записанной просто:
const score = 75;
const result =
  score >= 90
    ? "Отлично!"
    : score >= 70
      ? "Хорошо"
      : score >= 50
        ? "Удовлетворительно"
        : "Плохо";
console.log(result);

console.log(canAccessWebsite(12));

const canAccessWebsite2 = (age) => age < 18;
console.log(canAccessWebsite2(2));

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
  return present * KG_IN_USD;
}

function calculateKm(distance) {
  return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {}

const age = 24;
const isEmployed = false;
const availableFundsUsd = 1500;

function creditCheck(age, isEmployed) {
  return age >= 24 && isEmployed ? 500 : age >= 24 ? 100 : 0;
}

function canBuy(laptopPrice, availableFundsUsd, age, isEmployed) {
  const creditsAvailable = age >= 24 && isEmployed ? 500 : age >= 24 ? 100 : 0;
  console.log(creditsAvailable);
  return availableFundsUsd + creditsAvailable >= laptopPrice ? true : false;
}

console.log(creditCheck(age, isEmployed));
console.log(canBuy(2000, 1500, 24, true));
console.log(canBuy(2000, 1500, 24, false));
console.log(canBuy(3000, 1500, 25, true));
console.log(canBuy(2000, 1500, 16, false));
console.log(canBuy(2000, 2000, 15, false));

function start() {
  return "start";
}

function run() {
  console.log(start());
  return start() + "finish" + start();
}
console.log(run());
run();

function a() {
  console.log("in a");
  return c();
}

function b() {
  console.log("in b");
  return "Yes";
}

function c() {
  console.log("in c");
  return b;
}

a();
a();

const usersAge = [2040 - 2033, "20" - 6];
console.log(usersAge);

const userNames = new Array("Вася");

function square(el) {
  return el * el;
}

let users = ["Anna", "Victoria", "Kate"];
users[2] = "Cristine";
console.log(users);

users.push("Ivan");
users.unshift("Sergey");

users.pop();
console.log(users);

const roles = ["user", "admin", "manager", "superuser"];

const res = roles.slice(2);
console.log(roles); // [ 'user', 'admin', 'manager', 'superuser' ]
console.log(res); // [ 'manager', 'superuser' ]

const res2 = roles.slice(2, 3);
console.log(roles); // [ 'user', 'admin', 'manager', 'superuser' ]
console.log(res2); // [ 'manager']V

const res3 = roles.slice(-2);
console.log(res3); // [ 'manager', 'superuser' ]

const res4 = roles.slice(1, -1);
console.log(res4);

// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// const res5 = roles.splice(2, 1); // изъять один элемент со второй позиции. По факту третий.
// console.log(res5); // вернет массив с одним элементом ['manager']
// console.log(roles); // а из исходного массива он будет исключен [ 'user', 'admin', 'superuser' ]
//
// const res8 = roles.reverse();
// console.log(res8);
// console.log(roles);

const newRoles = ["sysadmin", "developer"];
const res9 = roles.concat(newRoles);
console.log(res9);

function fizzBuzz(n) {
  const fizzBuzzArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzArray.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzArray.push("Buzz");
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return fizzBuzzArray;
}

console.log(fizzBuzz(10));

function fizzbuzztern(n) {
  const fizzBuzzArray = [];
  for (let i = 1; i <= n; i++) {
    const fizz = i % 3 === 0 ? "Fizz" : "";
    const buzz = i % 5 === 0 ? "Buzz" : "";
    fizzBuzzArray.push(fizz + buzz || n);
  }
}

console.log(fizzbuzztern(10));

function zeroOne(num) {
  let zeroOnestring = "";
  for (let i = 1; i <= num; i++) {
    zeroOnestring += i % 2 === 0 ? 0 : 1;
  }
  return zeroOnestring;
}

console.log(zeroOne(10));

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));

function sumPositive(num) {
  let result = 0;
  for (let number in num) {
    result += num[number] > 0 ? num[number] : 0;
  }
  return result;
}

function sumPositiveOf(num) {
  let result = 0;
  for (let i of num) {
    result += i > 0 ? i : 0;
  }
  return result;
}

console.log(sumPositive([1, 4, -7, -12]));
console.log(sumPositiveOf([1, -4, -7, -12]));

// Написать функцию, которая принимает массив оценок (от 1 до 5) и возвращает среднюю оценку с округлением в меньшую сторону.
//
//

function evaluate(gradeArr) {
  let result = 0;
  for (let i of gradeArr) {
    result += i;
  }
  return Math.floor(result / gradeArr.length);
}

console.log(evaluate([3, 4, 4, 4, 4, 4, 5]));

function sumPositiveReduce(numbersArr) {
  return numbersArr.reduce(
    (result, number) => (number > 0 ? result + number : result),
    0,
  );
}

function testEven(n) {
  return n % 2;
}

/* Вам дан массив, где среди игреков (y) затесался один икс (x).
    Нужно удалить этот икс из массива. Сначала с помощью цикла for
    найдите индекс элемента, равного 'x', а затем используйте метод
    splice для удаления этого элемента.
    В конце концов выведите массив yArray в консоль. */

/* const numbers = [0, 1, 2, 3, "x", 5, 6, 7, 8, 9, "x", 11, 12, 13, 14]; */

function positiveSquaresOld(numbers) {
  return numbers
    .filter((number) => number >= 0)
    .map((number) => number * number);
}

function positiveSquares(numbers) {
  return numbers
    .filter((number) => number > 0)
    .map((number) => number * number);
}

console.log(positiveSquares([-10, 3, 10]));

function isAnagram(string2, string2) {
  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

function isAnagram2(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// //!* Задача: Написать функцию, которая возвращает сумму всех
// делителей числа n, кроме самого числа.
// Например, если n = 12, то функция возвращает 1 + 2 + 3 + 4 + 6 = 16 *!/
//

function divisorsSum(number) {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  return result % number === 0;
}

console.log(divisorsSum(6));

// /* Теперь, используя код из предыдущей задачи, нужно написать функцию,
//  * которая возвращает trueб если число совершенное, и false, если оно не
//  * совершенное. Совершенным числом называется такое число, которое
//  *  равно сумме всех своих делителей (кроме него самого).
//  * Например 6 - совершенное число, т.к. 6 = 1 + 2 + 3

// ///* Вам дан массив, где среди игреков (y) затесался один икс (x).
//     Нужно удалить этот икс из массива. Сначала с помощью цикла for
//     найдите индекс элемента, равного 'x', а затем используйте метод
//     splice для удаления этого элемента.
//     В конце концов выведите массив yArray в консоль. */
//
// /* const numbers = [0, 1, 2, 3, "x", 5, 6, 7, 8, 9, "x", 11, 12, 13, 14]; */

const numbers = [0, 1, 2, 3, "x", 5, 6, 7, 8, 9, "x", 11, 12, 13, 14];

for (index in numbers) {
  if (numbers[index] === "x") {
    numbers.splice(index, 1);
  }
}

console.log(numbers);

// //* Написать функцию printfirstword, которая найдет первое слово
//  * в строке и выведет его на экран. Первым словом считаются все
//  * символы, до первого пробела. *//
//

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2);
}

arr1 = [1, "2", 3];
arr2 = ["21", 121];
console.log(arrayPlusArray(arr1, arr2));

const numbersminmax = [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14];

function getMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

console.log(getMinMax(numbersminmax));

function digitize(n) {
  resultArray = String(n).split("").reverse();
  for (i = 0; i < resultArray.length; i++) {
    resultArray[i] = Number(resultArray[i]);
  }
  return resultArray;
}

console.log(digitize(35231));

// const tasks = ['Задача 1']
//
// function addTask(taskName) {
//   return tasks.push(taskName);
// }
//
// function deleteTask(taskName) {
//   const taskIndex = tasks.indexOf(taskName);
//   if (taskIndex >= 0) {
//     tasks.splice(taskIndex, 1);
//   }
// }
//
// function taskPrioritize(taskName) {
//   if (tasks.includes(taskName)) {
//     deleteTask(taskName);
//     tasks.unshift(taskName);
//   }
// }
//
// addTask('Задача 2');
// addTask('Задача 3');
// deleteTask('Задача 1');
// taskPrioritize('Задача');
// deleteTask('Несуществующая задача');
// console.log(tasks);
//
// решение от chatGPT

const tasks = ["Задача 1"];

function addTask(taskName) {
  tasks.push(taskName);
  return true;
}

function deleteTask(taskName) {
  const taskIndex = tasks.indexOf(taskName);
  if (taskIndex >= 0) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
}

function taskPrioritize(taskname) {
  const taskIndex = tasks.indexOf(taskName);
  if (taskIndex > 0) {
    const [task] = tasks.splice(taskIndex, 1);
    tasks.unshift(task);
    return true;
  }
  return taskIndex === 0;
}

function gitAdd() {
  return false;
}

function gitCommit() {
  return false;
}

function newStash() {}

function sendToEmail() {}
