function UserFilter({ filter, setFilter }) {
  const handleChange = (event) => {
    return setFilter(event.target.value);
  };
  return (
    <div className="filter_container">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Input Name..."
        autoFocus
      />
    </div>
  );
}

export default UserFilter;
