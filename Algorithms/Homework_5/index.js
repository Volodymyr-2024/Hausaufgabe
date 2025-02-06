/*Задача 1.
Реализуем две функции - mergeSort() и merge(). mergeSort() - разделяет массив на 2 массива до базового случая (пока длина массива не равна 1), и возвращает функцию слияния merge(), 
аргументом которой есть рекурсивно вызванные функции для левого и правого разделенных массовов. Функция merge() выполняет слияние упорядоченных массивов.
*/

function mergeSort(arr) {
  // Базовый случай: если массив из одного или нуля элементов, он уже отсортирован
  if (arr.length <= 1) {
    return arr;
  }

  // Разделяем массив пополам
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Рекурсивно сортируем обе половины и затем сливаем их
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  // Сливаем два массива в один отсортированный
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Добавляем оставшиеся элементы, если есть
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Пример использования
const arr = [8, 3, 5, 2, 9, 1];
console.log(mergeSort(arr)); // [1, 2, 3, 5, 8, 9]

/*Задача 2
 */
import { readFile, writeFile } from "fs/promises";

async function readNumbersFromFile(filename) {
  try {
    const data = await readFile(filename, "utf8");
    return data
      .split("\n")
      .map(Number)
      .filter((num) => !isNaN(num)); // Убираем нечисловые значения
  } catch (error) {
    console.error(`Ошибка чтения файла ${filename}:`, error.message);
    return [];
  }
}

async function mergeSortedFiles(inputFiles, outputFile) {
  let sortedArrays = await Promise.all(inputFiles.map(readNumbersFromFile));

  // Сливаем все массивы
  let mergedArray = sortedArrays.reduce((acc, arr) => merge(acc, arr), []);

  // Записываем в файл
  try {
    await writeFile(outputFile, mergedArray.join("\n"), "utf8");
    console.log(`Объединенный файл записан в ${outputFile}`);
  } catch (error) {
    console.error(`Ошибка записи в файл ${outputFile}:`, error.message);
  }
}

//  Получаем аргументы командной строки
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Использование: node index.js input1.txt input2.txt output.txt");
} else {
  const outputFile = args.pop();
  mergeSortedFiles(args, outputFile);
}
