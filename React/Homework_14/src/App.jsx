import User from "./components/User";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="container">
      <hr />
      <h1>User Profile</h1>
      <User />
      <UserForm />
    </div>
  );
}

export default App;
