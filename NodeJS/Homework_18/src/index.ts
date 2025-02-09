/*Task 1. Создайте два типа: `Admin` и `User`.Тип `Admin` должен включать поля `name` (строка) и 
`permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.*/
type Admin = {
  name: string;
  permission: string[];
};
type User = {
  name: string;
  email: string;
};
type AdminUser = Admin & User;

const myObj: AdminUser = {
  name: "Admin",
  permission: ["read", "write"],
  email: "admin@examle.com",
};

/*Task2. Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`,
 который имеет поля `type` (строка) и `horsepower` (число).Добавьте опциональное поле `year` (число) для года выпуска машины.
Напишите функцию, которая выводит информацию о машине.*/
type Engine = {
  type: string;
  horsepower: number;
};
type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};
const myCar: Car = {
  make: "Germany",
  model: "VW",
  engine: { type: "1.4TSI", horsepower: 122 },
};

const displayAuto = (car: Car): void => {
  console.log(
    `Made in: ${car.make}, model: ${car.model}, type of engine: ${car.engine.type}, horsepower: ${car.engine.horsepower}`
  );
};
displayAuto(myCar);

/*Task 3*. Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` 
с полями `name` (строка) и `price` (число), а также параметр `discount` (число).Функция должна возвращать новую цену продукта с учетом скидки.*/

interface Fn {
  (Product: { name: string; price: number }, discount: number): number;
}
const myProduct = {
  name: "aplle",
  price: 12,
};
const calculateDiscount: Fn = (product, discount) => {
  const newPrice = product.price - (product.price * discount) / 100;
  return newPrice;
};
console.log(`New price is ${calculateDiscount(myProduct, 5)}`);

/*Task 4. Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число). Создайте массив объектов `Employee`,
затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.*/

interface Employee {
  name: string;
  salary: number;
}
const employee: Employee[] = [
  {
    name: "Worker1",
    salary: 250,
  },
  {
    name: "Worker2",
    salary: 200,
  },
  {
    name: "Worker3",
    salary: 300,
  },
];
const displaySalary = (arr: Employee[]): number[] =>
  arr.map((employee) => employee.salary);
console.log(`Salaries: ${displaySalary(employee)}`);

/*Task 5. Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка). Создайте интерфейс `Student`, 
который наследует `Person` и добавляет поле `grade` (число). Создайте объект `student` этого типа и напишите функцию,
 которая выводит полное имя студента и его оценку.*/
interface Person {
  firstName: string;
  lastName: string;
}
interface Student extends Person {
  grade: number;
}
const student: Student = {
  firstName: "Nikolay",
  lastName: "Petrov",
  grade: 5,
};
function disaplayInfoSudent(stud: Student): void {
  console.log(`Name is: ${stud.firstName}, grade is: ${stud.grade}`);
}
disaplayInfoSudent(student);

/*Task 6. Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
Реализуйте эту функцию и протестируйте её.*/
interface ConcatStringsFn {
  (str1: string, str2: string): string;
}
const concatStrings: ConcatStringsFn = (str1, str2) => str1 + str2;

console.log(concatStrings("Hello ", "World"));
