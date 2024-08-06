// Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).

console.log("-----Решение_1-----");

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

console.log("-----Решение_2-----");

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 20 && arr[i] > 8) {
    console.log(arr[i]);
  }
}

// Создайте массив чисел и найдите минимальное значение.

console.log("-----Решение_3-----");

let arr1 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
let result = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (result > arr1[i]) {
    result = arr1[i];
  }
}
console.log(result);

// Создайте массив чисел и обновите значение элемента по индексу.

console.log("-----Решение_4-----");

let arr2 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
arr2[3] = 200;
arr2[8] = 400;
console.log(arr2);

// Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

console.log("-----Решение_5-----");

const wort = ["banane", "orange", "barbaris", "apple", "Passion fruit"];
let res = "";
for (i = 0; i < wort.length - 1; i++) {
  if (wort[i].length > wort[i + 1].length) {
    res = wort[i];
  } else res = wort[i + 1];
}
console.log(res);
