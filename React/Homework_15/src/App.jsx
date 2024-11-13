import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import { useState, useMemo, useCallback } from "react";

const users = [
  { id: 1, name: "Jane Johnson" },
  { id: 2, name: "Sophia Anderson" },
  { id: 3, name: "Olivia Thomas" },
  { id: 4, name: "Emma White" },
  { id: 5, name: "John Smith" },
  { id: 6, name: "Emma Jackson" },
  { id: 7, name: "Emma Thomas" },
  { id: 8, name: "James Johnson" },
  { id: 9, name: "Emily Harris" },
  { id: 10, name: "David Johnson" },
  { id: 11, name: "Daniel Martin" },
  { id: 12, name: "Olivia Brown" },
  { id: 13, name: "John Johnson" },
  { id: 14, name: "Daniel Taylor" },
  { id: 15, name: "Olivia Harris" },
  { id: 16, name: "Emma Harris" },
  { id: 17, name: "James Jackson" },
  { id: 18, name: "Olivia Anderson" },
  { id: 19, name: "Michael White" },
  { id: 20, name: "Emma Johnson" },
  { id: 21, name: "Emma Martin" },
  { id: 22, name: "James Jackson" },
  { id: 23, name: "David Martin" },
  { id: 24, name: "Daniel Harris" },
  { id: 25, name: "Emily Anderson" },
  { id: 26, name: "Emily Smith" },
  { id: 27, name: "Olivia White" },
  { id: 28, name: "John Martin" },
  { id: 29, name: "Daniel Smith" },
  { id: 30, name: "Emily Jackson" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((filter) => {
    const trimFilter = filter.trim().toLowerCase();
    return users.filter((user) =>
      user.name.toLowerCase().startsWith(trimFilter)
    );
  }, []);

  const filterMemoUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );
  return (
    <div className="container">
      <UserFilter filter={filter} setFilter={setFilter} />
      <UserList users={filterMemoUsers} />
    </div>
  );
}

export default App;
