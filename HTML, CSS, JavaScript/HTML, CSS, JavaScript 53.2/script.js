// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) и методы increment и decrement для увеличения и уменьшения значения count соответственно.
// Пример вызова методов increment и decrement
// counter.increment();
// console.log(counter.count); // Ожидаемый вывод: 1
// counter.decrement();
// console.log(counter.count); // Ожидаемый вывод: 0
const counter = {
  count: 0,
  increment: function () {
    this.count += 1;
  },
  decrement: function () {
    this.count -= 1;
  },
};
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);
