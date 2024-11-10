import Filter from "./components/Filter";
import UserList from "./components/UserList";
import "./main.css";

function App() {
  return (
    <div className="container">
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
