// Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.
// Например:
// const arr1 = [1, 2, 3];
// const arr2 = CopyEntity.copyObject(arr1);
// arr1[0] = 999;
// console.log(arr1);
// console.log(arr2);

class CopyEntity {
  static copyObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
const obj1 = {
  name: "Nikolay",
  age: 18,
  city: "Berlin",
};
const obj2 = CopyEntity.copyObject(obj1);
obj1["country"] = "Germany";
console.log(obj1);
console.log(obj2);
