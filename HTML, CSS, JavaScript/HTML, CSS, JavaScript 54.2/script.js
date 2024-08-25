// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// Используйте цикл для вызова метода draw() для каждого элемента массива.
class Shape {
  draw() {
    console.log("Рисование фигуры");
  }
}
class Rectangle extends Shape {
  draw() {
    console.log("Рисование прямоугольника");
  }
}
class Circle extends Shape {
  draw() {
    console.log("Рисование круга");
  }
}
const array = [new Rectangle(), new Circle(),new Rectangle(), new Circle(),new Rectangle(), new Circle()];
for (let arr of array){
  arr.draw()
}