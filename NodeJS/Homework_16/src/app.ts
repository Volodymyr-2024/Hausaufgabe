function greetUser(name: string): void {
  console.log(`Привет, ${name} `);
}
greetUser("Petr");

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(obj: Person): void {
  console.log(`Name: ${obj.name}, age: ${obj.age}, city: ${obj.city}`);
}

const object = {
  name: "Petr",
  age: 34,
  city: "Berlin",
};
printPersonInfo(object);

function squareNumber(num: number): number {
  return num * num;
}
console.log(squareNumber(7));

function isEven(num: number): boolean {
  if (Math.floor(num / 2) === num / 2) {
    return true;
  }
  return false;
}
console.log(isEven(41));

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(obj: Student): void {
  console.log(`Студент: ${obj.name}, Оценка: ${obj.grade}`);
}

const student = {
  name: "Николай",
  grade: 5,
};

printStudentInfo(student);

const logMessage = (str: string): void => {
  console.log(str);
};
logMessage("Hello, World!");
