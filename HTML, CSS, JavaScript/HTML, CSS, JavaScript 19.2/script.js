// Задания 1.*

// Напишите программу для оценки студентов в зависимости от их баллов. Программа должна принимать на вход количество баллов (целое число)
// и выводить оценку в виде буквенного символа по следующей шкале:

// 90 и выше: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Меньше 60: 'F'

let score = 68;
let result;
if (score >= 90) {
  result = "Ваша оценка A";
} else if (score >= 80) {
  result = "Ваша оценка B";
} else if (score >= 70) {
  result = "Ваша оценка C";
} else if (score >= 60) {
  result = "Ваша оценка D";
} else if (score >= 0) {
  result = "Ваша оценка F";
} else {
  result = "Вы ввели неверное значение";
}
console.log(result);

// Задания 2.*

// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).
// Используя конструкцию switch, определите текущий день недели и выведите его в консоль. (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

let dayOfWeek = 5;
let res;
switch (dayOfWeek) {
  case 1:
    res = "Понедельник";
    break;
  case 2:
    res = "Вторник";
    break;
  case 3:
    res = "Среда";
    break;
  case 4:
    res = "Четверг";
    break;
  case 5:
    res = "Пятница";
    break;
  case 6:
    res = "Суббота";
    break;
  case 7:
    res = "Воскресенье";
    break;
  default:
    res = "Вы ввели неверный день недели";
}
console.log(res);