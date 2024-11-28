/* Работаем с коллекцией sample_data.restaurants, подключение:
mongodb://ich1:password@3.67.41.21:27017/?readPreference=primary&ssl=false&authMechanism=DEFAULT&authSource=ich
*/

// Найти рестораны на 'Staten Island' в названии которых есть слово pizza (Pizza и PIZZA тоже считаются)
db["restaurants"].find({
  $and: [{ borough: "Staten Island" }, { name: { $regex: /pizza/i } }],
});

// Выведите названия 5 лучших по среднему значению отзывов ( $avg: "$grades.score")
db.getCollection("restaurants").aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        avg_scores: { $avg: "$grades.score" },
      },
    },
    { $sort: { avg_scores: -1 } },
    { $limit: 5 },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);
