//Task_1
abstract class Animal {
  abstract makeSound(): void;
}
class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((item) => item.makeSound());

//Task_2
abstract class Shape {
  abstract name: string;
  abstract calculateArea(): void;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}
class ColoredCircle extends ColoredShape {
  name: string;
  color: string;
  constructor(name: string, color: string, public radius: number) {
    super();
    this.name = name;
    this.color = color;
  }
  calculateArea(): void {
    console.log(this.color, Math.PI * this.radius * this.radius);
  }
}
class ColoredRectangle extends ColoredShape {
  name: string;
  color: string;
  constructor(
    name: string,
    color: string,
    public width: number,
    public heigth: number
  ) {
    super();
    this.name = name;
    this.color = color;
  }
  calculateArea(): void {
    console.log(this.color, this.width * this.heigth);
  }
}
const coloredCircle = new ColoredCircle("Circle", "Red", 15);
const coloredRectangle = new ColoredRectangle("Area", "white", 10, 4);
coloredCircle.calculateArea();
coloredRectangle.calculateArea();

//Task_3
abstract class Appliance {
  abstract turnOnn(): void;
  abstract turnOff(): void;
}
class WashingMachine extends Appliance {
  turnOnn(): void {
    console.log("Washingmachine turn Onn");
  }
  turnOff(): void {
    console.log("Washingmachine turn Off");
  }
}
class Refrigerator extends Appliance {
  turnOnn(): void {
    console.log("Refrigerator turn Onn");
  }
  turnOff(): void {
    console.log("Refrigerator turn Off");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach((item) => (item.turnOnn(), item.turnOff()));

//Task_4
abstract class Account {
  constructor(protected balance: number) {}
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
  getBalance(): number {
    return this.balance;
  }
}
class SavingAccount extends Account {
  constructor(balance: number) {
    super(balance);
  }
  deposit(amount: number): void {
    if (amount > 0) {
      console.log(
        `На счет положено ${amount}. Новый баланс: ${(this.balance += amount)}`
      );
    } else console.log("Сумма должна быть положительной");
  }
  withdraw(): void {}
}
class CheckingAccount extends Account {
  constructor(balance: number) {
    super(balance);
  }
  deposit(): void {}
  withdraw(amount: number): void {
    const totalAmount = amount + this.balance;
    if (amount > 0) {
      this.balance -= amount;
      console.log(`Со счета снято: ${amount}. Новый баланс: ${this.balance}`);
    } else {
      console.log("Недостаточно средств или неверная сумма.");
    }
  }
}
const savingAccount = new SavingAccount(500);
const checkingAccount = new CheckingAccount(1000);
savingAccount.deposit(500);
checkingAccount.withdraw(200);

//Task_5
abstract class Media {
  abstract play(): void;
}
class Audio1 extends Media {
  play(): void {
    console.log("Playing audio");
  }
}
class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}
const medias: Media[] = [new Audio1(), new Video()];
medias.forEach((item) => item.play());
