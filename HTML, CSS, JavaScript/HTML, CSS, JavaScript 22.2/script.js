// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму,
// для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

function sumNumbers(a, b = 8) {
  return a + b;
}
console.log(`Сумма чисел равна: ${sumNumbers(15)}`);

// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму
//  всех его элементов, не используя методы массивов.

const numbers = [1, 3, 5, 6, 3, 4, 7, 15];
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(
  `Сумма всех элементов массива ${numbers} равна: ${calculateSum(numbers)}`
);

// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

const students = [
  {name: "Николай", age: 20, course: "3-й"},
  {name: "Валерий", age: 18, course: "1-й"},
  {name: "Павел", age: 21, course: "4-й"},
];
function displayStudentInfo(student) {
  console.log(`Имя: ${student.name}`);
  console.log(`Возраст: ${student.age}`);
  console.log(`Курс: ${student.course}`);
  console.log('------------');
}
for (let i = 0; i < students.length; i++) {
  displayStudentInfo(students[i]);
}
