import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
