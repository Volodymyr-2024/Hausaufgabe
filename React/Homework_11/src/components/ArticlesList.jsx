import { NavLink } from "react-router-dom";
import styles from "./ArticlesList.module.css";

export default function ArticlesList() {
  return (
    <div className={styles.container}>
      <h1>Список статей</h1>
      <ul className={styles.list}>
        <NavLink to="/article/1">
          <li>Статья 1</li>
        </NavLink>
        <NavLink to="/article/2">
          <li>Статья 2</li>
        </NavLink>
        <NavLink to="/article/3">
          <li>Статья 3</li>
        </NavLink>
      </ul>
    </div>
  );
}
