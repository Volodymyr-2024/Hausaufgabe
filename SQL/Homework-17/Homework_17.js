// Тестовая коллекция в mongo atlas  sample_mflix.theaters. Найти все кинотеатры в Калифорнии и посчитать их количество
db.getCollection("theatres").aggregate(
  [
    {
      $match: { "location.address.state": "CA" },
    },
    { $count: "total_Theaters" },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

// Тестовая коллекция в mongo atlas  sample_airbnb.listingsAndReviews. Найти недвижимость с самым большим количеством спален (bedrooms) и напишите ее название
db.airbnb
  .find({}, { name: 1, bedrooms: 1, _id: 0 })
  .sort({ bedrooms: -1 })
  .limit(1);

/* Тестовая коллекция в mongo atlas sample_airbnb.listingsAndReviews. Найти недвижимость с самым высоким рейтингом 
 review_scores_rating при минимальном количестве отзывов 50 (number_of_reviews) и напишите ее название
 */
db.airbnb
  .find(
    { number_of_reviews: { $gte: 50 } },
    {
      name: 1,
      "review_scores.review_scores_rating": 1,
      number_of_reviews: 1,
      _id: 0,
    }
  )
  .sort({ "review_scores.review_scores_rating": -1 })
  .limit(1);
