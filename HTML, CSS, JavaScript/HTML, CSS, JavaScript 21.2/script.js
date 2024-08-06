// Задание 1
// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.
const objekt = {
    name: 'Arnold',
    age: 58
}
console.log(`Мое имя: ${objekt.name}`);
console.log(`Мой возвраст: ${objekt.age}`);
console.log(`*********************************`)

// Задание 2
// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.
const book1 = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков'
};
const book2 = {
    title: 'Война и мир',
    author: 'Лев Толстой'
};
const book3 = {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский'
};
const books = [book1, book2, book3];
for (let i = 0; i < books.length; i++) {
    console.log(`Книга ${i+1}:`);
    console.log(`Название: ${books[i].title}`);
    console.log(`Автор: ${books[i].author}`)
}
console.log(`*********************************`)

// Задание 3 *
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }.
// Добавьте в этот объект ключи s и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.
const rectangle = {
    a: 10,
    b: 35
};
rectangle.s = rectangle.a * rectangle.b;
rectangle.p =2 * (rectangle.a + rectangle.b);
console.log(rectangle);
console.log(`*********************************`)

// Задание 4 *
// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов,
// которые имеют цвет "красный", и выведите их в консоль.
const fruits = [
  { name: "Вишня", color: "красный" },
  { name: "Апельсин", color: "оранжевый" },
  { name: "Яблоко", color: "красный" },
  { name: "Лимон", color: "желтый" },
  { name: "Клубника", color: "красный" },
];
const fruits_red = [];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === "красный") {
    fruits_red.push(fruits[i]);
  }
}
for (i = 0; i < fruits_red.length; i++) {
  console.log(`Фрукт: ${fruits_red[i].name}, Цвет: ${fruits_red[i].color}`);
}
console.log(`*********************************`)

// Задание 5 **
// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

const playlist = {
  songs: [
    { title: "Песня 1", artist: "Исполнитель 1", duration: "3:45" },
    { title: "Песня 2", artist: "Исполнитель 2", duration: "4:05" },
    { title: "Песня 3", artist: "Исполнитель 3", duration: "2:55" },
  ],
};
for (let i = 0; i < playlist.songs.length; i++) {
  console.log(`Песня ${i + 1}:`);
  console.log(`Название: ${playlist.songs[i].title}`);
  console.log(`Исполнитель: ${playlist.songs[i].artist}`);
  console.log(`Продолжительность: ${playlist.songs[i].duration}`);
  console.log("");
}
