function ShoppingList({ elements }) {
  if (elements.length === 0) {
    return <p>Список покупок пуст</p>;
  }
  return (
    <ul>
      {elements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ShoppingList;
