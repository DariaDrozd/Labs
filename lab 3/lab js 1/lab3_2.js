// Запит на введення першого від'ємного цілого числа
let num1 = parseInt(prompt('Введіть від\'ємне ціле число №1:'));

// Перевірка на від'ємність першого числа
while (num1 >= 0 || isNaN(num1)) {
  num1 = parseInt(prompt('Некоректний ввід. Введіть від\'ємне ціле число №1:'));
}

// Запит на введення другого від'ємного цілого числа
let num2 = parseInt(prompt('Введіть від\'ємне ціле число №2:'));

// Перевірка на від'ємність другого числа
while (num2 >= 0 || isNaN(num2)) {
  num2 = parseInt(prompt('Некоректний ввід. Введіть від\'ємне ціле число №2:'));
}

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let result = '';

// Знайти всі числа, що діляться без залишку на цілу частину різниці двох чисел
for (let i = min; i <= max; i++) {
  let rem = i % parseInt(Math.abs(num1 - num2));
  if (rem === 0) {
    result += i + ' ';
  }
}

// Виведення результату
if (result === '') {
  alert('Немає чисел, що діляться на ' + Math.abs(num1 - num2));
} else {
  alert('Числа, що діляться на ' + Math.abs(num1 - num2) + ': ' + result);
}
