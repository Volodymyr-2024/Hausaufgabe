import { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import { citiesData } from "./components/CitySelector";
import "./App.css";

function App() {
  const [cardCity, setCardCity] = useState(citiesData[0]);
  console.log(citiesData[0].name);

  return (
    <div className="city_card">
      <div className="container">
        <CitySelector cardCity={setCardCity} />
        <CityCard card={cardCity} />
      </div>
    </div>
  );
}

export default App;
