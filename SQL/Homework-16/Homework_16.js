// Найдите средний возраст из коллекции ich.US_Adult_Income
db.getCollection("US_Adult_Income").aggregate([
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" },
    },
  },
]);
/* Поменяв подключение к базе данных, создать коллекцию orders_NAME (для уникальности - добавим ваше имя в название) со свойствами id, customer, product, amount, city, используя следующие данные:

1 Olga Apple 15.55 Berlin
2 Anna Apple 10.05 Madrid
3 Olga Kiwi 9.6 Berlin
4 Anton Apple 20 Roma
5 Olga Banana 8 Madrid
6 Petr Orange 18.3 Paris

Пример: 
db.orders.insertMany([
{
id: XXX,
customer: ‘XXXX’,
product: ‘XXXX’,
amount: XXXXX,
city: ‘XXXX’
}
*/
db.orders_Volodymyr.insertMany([
  { id: 1, customer: "Olga", product: "Apple", amount: 15.55, city: "Berlin" },
  { id: 2, customer: "Anna", product: "Apple", amount: 10.55, city: "Madrid" },
  { id: 3, customer: "Olga", product: "Kiwi", amount: 9.6, city: "Berlin" },
  { id: 4, customer: "Anton", product: "Apple", amount: 20, city: "Roma" },
  { id: 5, customer: "Olga", product: "Banana", amount: 8, city: "Madrid" },
  { id: 6, customer: "Petr", product: "Orange", amount: 18.3, city: "Paris" },
]);

// Найти сколько всего было совершено покупок
db.orders_Volodymyr.countDocuments();

// Найти сколько всего раз были куплены яблоки
db.orders_Volodymyr.countDocuments({ product: "Apple" });

// Вывести идентификаторы трех самые дорогих покупок
db.getCollection("orders_Volodymyr").aggregate(
  [{ $sort: { amount: -1 } }, { $limit: 3 }, { $project: { _id: 0, id: 1 } }],
  { maxTimeMS: 60000, allowDiskUse: true }
);

// Найти сколько всего покупок было совершено в Берлине
db.orders_Volodymyr.countDocuments({ city: "Berlin" });

// Найти количество покупок яблок в городах Берлин и Мадрид
db.orders_Volodymyr.countDocuments({ city: { $in: ["Berlin", "Madrid"] } });

// Найти сколько было потрачено каждым покупателем (подсказка: используем $group и total: {$sum: '$amount'} )
db.getCollection("orders_Volodymyr").aggregate(
  [
    {
      $group: {
        _id: "$customer",
        total: { $sum: "$amount" },
      },
    },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

// Найти в каких городах совершала покупки Ольга (подсказка: используем $match customer: 'Olga' и $group _id: '$city')
db.getCollection("orders_Volodymyr").aggregate(
  [{ $match: { customer: "Olga" } }, { $group: { _id: "$city" } }],
  { maxTimeMS: 60000, allowDiskUse: true }
);
