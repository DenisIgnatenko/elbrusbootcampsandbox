function generateRange(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}

console.log(generateRange(2, 10, 2));

function cycleGo() {
  let string = '';
  for (let i = 20; i >= 0; i -= 4) {
    string += i;
  }
  return (string += 'поехали!');
}

console.log(cycleGo());

function trimSpaces(string) {
  return string.replace(/[' ']/g, '');
}

console.log(trimSpaces('Ко с мо сsdasdasd '));

function filterArray(arrStr, num) {
  return arrStr.filter((element) => element.length === num);
}

console.log(
  filterArray(
    ['Коррекция', 'Виток', 'Воздух', 'Газоанализатор', 'Температура'],
    6
  )
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
    ? 'Отлично!'
    : score >= 70
      ? 'Хорошо'
      : score >= 50
        ? 'Удовлетворительно'
        : 'Плохо';
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
  return 'start';
}

function run() {
  console.log(start());
  return start() + 'finish' + start();
}
console.log(run());
run();

function a() {
  console.log('in a');
  return c();
}

function b() {
  console.log('in b');
  return 'Yes';
}

function c() {
  console.log('in c');
  return b2;
}

a();
a();
