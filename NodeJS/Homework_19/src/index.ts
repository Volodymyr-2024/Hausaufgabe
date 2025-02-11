/*Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив 
чисел и возвращает сумму всех четных чисел.*/
const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((sum, item) => (item % 2 === 0 ? sum + item : sum), 0);
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5]));

/*Определите интерфейс `StringToBooleanFunction` для функции, которая 
принимает строку и возвращает `boolean` (например, проверяет, является
 ли строка пустой). Реализуйте такую функцию.*/
interface StringToBooleanFunction {
  (str: string): boolean;
}
const stringToBooleanFunction: StringToBooleanFunction = (str) => {
  return str.length !== 0;
};
console.log(stringToBooleanFunction("Hello"));
console.log(stringToBooleanFunction(""));

/*Создайте тип `CompareStrings` для функции, принимающей две строки и 
возвращающей `boolean` (например, для проверки равенства строк). Напишите
 функцию, соответствующую этому типу.*/
let CompareStrings: (str1: string, str2: string) => boolean;
CompareStrings = (str1, str2) => {
  return str1 === str2;
};
console.log(CompareStrings("Hello", "Hello"));

/*Напишите обобщенную функцию `getLastElement`, которая принимает массив 
любого типа и возвращает последний элемент этого массива.*/
function getLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
console.log(getLastElement(["apple", "banana", "kiwi"]));

/*Создайте обобщенную функцию `make Triple`, которая принимает три 
аргумента одного типа и возвращает массив из этих трёх элементов.*/
function makeTriple<T>(arg1: T, arg2: T, arg3: T): T[] {
  return [arg1, arg2, arg3];
}
console.log(makeTriple(5, 3, 1));
console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(true, false, true));
