import "./CityCard.css";
export default function CityCard({ card }) {
  //   if (!card) {
  //     return <div></div>;
  //   }
  return (
    <div>
      <h2>{card.name}</h2>
      <img src={card.imageUrl} alt={card.name} />
      <p>{card.description}</p>
      <ul>
        {card.facts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
