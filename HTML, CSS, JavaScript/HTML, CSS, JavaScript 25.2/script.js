// Задание 1
// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает
// произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.
function arrayMultiplication(array) {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }
  return mult;
}
arr = [1, 2, 3, 4, 5];
console.log(
  `Произведение всех элементов массива ${arr} равно ${arrayMultiplication(arr)}`
);
console.log(`********************`)
// Задание 2
// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл
//  while для подсчета суммы всех элементов массива.

const array = [1, 2, 34, 4, 50, 6, 7, 87, 9, 10];
let sum = 0;
let i = 0;
while (i < array.length) {
  sum += array[i];
  i++;
}
console.log(`Сумма всех элементов массива ${array} равна ${sum}`);
console.log(`********************`)

//  Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.

function arrayObjekt(arrayKey, arrayValue) {
  let objekt = {};
  for (let i = 0; i < arrayKey.length; i++) {
    objekt[arrayKey[i]] = arrayValue[i];
  }
  return objekt;
}

const arrayKey1 = ["Имя", "Возраст", "Образование"];
const arrayValue1 = ["Николай", 30, "ИТ-разработчик"];
const result = arrayObjekt(arrayKey1, arrayValue1);
console.log(arrayObjekt(arrayKey1, arrayValue1));
console.log(`********************`)

//  Напишите функцию, которая вычисляет среднее значение чисел в массиве.

function averageValue(arrAverage) {
let sum = 0;
for (let i = 0; i < arrAverage.length; i++) {
sum += arrAverage[i];
}
let average = sum / arrAverage.length;
return average;
}
console.log(`Среднее значение чисел в массиве ${array} равно ${averageValue(array)}`); 
console.log(`********************`)  

//  Напишите функцию, которая сортирует массив чисел по возрастанию.

const arraySort = (arrMax) => {
let x = arrMax.length;    
    for (let i = 0; i < x - 1; i++) {
        for (let j = 0; j < x - 1 - i; j++) {
              if (arrMax[j] > arrMax[j + 1]) {
                let tmp = arrMax[j];
                arrMax[j] = arrMax[j + 1];
                arrMax[j + 1] = tmp;
            }
        }
    }
    return arrMax;
}
console.log(`Новый массив по возрастанию ${arraySort(array)}`);