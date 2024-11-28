// Из базы данных ich работаем с коллекцией ich.Spotify_Youtube:
// Найдите трек с наивысшими показателями  Danceability и Energy.
db.getCollection("Spotify_Youtube").aggregate(
  [
    {
      $set: {
        total: {
          $add: ["$Danceability", "$Energy"],
        },
      },
    },
    { $sort: { total: -1 } },
    { $limit: 1 },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

// У какого трека (но не compilation) самая большая длительность?
db.Spotify_Youtube.find({ compilation: { $ne: true } })
  .sort({ Duration: -1 })
  .limit(1);

// В каком одном альбоме самое большее количество треков?
db.getCollection("Spotify_Youtube").aggregate(
  [
    {
      $group: {
        _id: "$Album",
        count_track: { $sum: 1 },
      },
    },
    { $sort: { count_track: -1 } },
    { $limit: 1 },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

// Сколько просмотров видео на youtube у трека с самым высоким количеством прослушиваний на spotify (Stream)?
db.getCollection("Spotify_Youtube").aggregate(
  [
    { $sort: { Stream: -1 } },
    { $limit: 1 },
    { $project: { _id: 0, Views: 1 } },
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

/* Экспортируйте 20 самых популярных (прослушивания или просмотры) треков по версиям youtube и spotify и 
импортируйте в базу ich_edit их с именами top20youtube и top20spotify, и добавьте им свои имена для уникальности.
*/
db.getCollection("Spotify_Youtube").aggregate(
  [{ $sort: { Stream: -1 } }, { $limit: 20 }, { $merge: { into: "ich_edit" } }],
  { maxTimeMS: 60000, allowDiskUse: true }
);
