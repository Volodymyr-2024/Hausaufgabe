/* Из коллекции sample_airbnb.listingsAndReviews найдите среднюю цену за сутки проживания на Гавайских островах. 
Островов несколько, поэтому либо используем {'address.location': {$geoWithin: { $centerSphere …. 
Либо перечисляем все возможные острова в поле market
Подсказка - нам понадобится 2 этапа агрегации : $match и $group
*/
db.airbnb.aggregate(
  [
    {
      $match: {
        "address.location": {
          $geoWithin: {
            $centerSphere: [[-157.8583, 21.3069], 0.5],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        avg_price: { $avg: "$price" },
      },
    },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

/* Подсчитайте в коллекции sample_mflix.movies, сколько фильмов имеют imdb рейтинг выше 8 и 
выходили в период с 2015 до 2023 года (используем year) Какой из них имеет самый высокий рейтинг?
*/
db["2708_movies"].aggregate([
  {
    $match: {
      "imdb.rating": { $gt: 8 },
      year: { $gte: 2015, $lte: 2023 },
    },
  },
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
      highest_rating: { $max: "$imdb.rating" },
    },
  },
]);
