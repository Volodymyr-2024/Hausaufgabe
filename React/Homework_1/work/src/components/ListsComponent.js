function ListsComponent() {
  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        <li>First item</li>
        <li>
          Second item
          <ol>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
          </ol>
        </li>
        <li>Third item</li>
      </ol>

      <h2>Unordered List</h2>
      <ul>
        <li>First item</li>
        <li>
          Second item
          <ul>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
          </ul>
        </li>
        <li>Third item</li>
      </ul>
    </div>
  );
}
export default ListsComponent;
