import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import ArticlesList from "./components/ArticlesList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Статьи</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.routes}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
