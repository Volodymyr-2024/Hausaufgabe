import "./CitySelector.css"

const citiesData = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },
  {
    name: "Киото",
    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl:
      "https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },
  {
    name: "Осака",
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl:
      "https://media.istockphoto.com/id/919002032/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%B0%D0%BA%D0%B0-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F-%D1%81%D0%BA%D0%B0%D0%B9%D0%BB%D0%B0%D0%B9%D0%BD.jpg?s=612x612&w=0&k=20&c=xOdurfKbVNy49d6mWwtxt-6FZz83mvasgLDXdfJwO0M=",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },
  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl:
      "http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },
  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl:
      "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];
export { citiesData };
export default function CitySelector({ cardCity }) {
  function handleChange(event) {
    cardCity(citiesData[event.target.value]);
    // console.log(citiesData[event.target.value]);
  }
  return (
    <div>
      <h1>Выберите город:</h1>
      <select name="" id="cities" onChange={handleChange}>
        {citiesData.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
