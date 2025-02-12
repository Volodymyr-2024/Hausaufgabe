//Task_1
class Animal {
  constructor(public name: string, public species: string) {}
  sound() {
    console.log("The animals makes a sound");
  }
}
class Dog extends Animal {
  constructor(name: string, species: string, public breed: string) {
    super(name, species);
  }
  sound() {
    console.log("The dog barks");
  }
}
const animal = new Animal("Boss", "dog");
const dog = new Dog("Boss", "dog", "Deutsche Dog");
animal.sound();
dog.sound();

//Task_2
class Library {
  static totalBooks = 0;
  constructor(public title: string) {}
  addBook() {
    Library.totalBooks++;
    console.log(`Total books: ${Library.totalBooks}`);
  }
}
const library1 = new Library("City Library");
const library2 = new Library("University Library");
library1.addBook();
library2.addBook();

//Task_3
class Vehicle {
  constructor(public make: string, public model: string) {}
}
class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model);
  }
}
const vehicle = new Vehicle("USA", "Tesla");
const motorcycle = new Motorcycle("Japan", "Honda", "bike");
console.log(vehicle);
console.log(motorcycle);
