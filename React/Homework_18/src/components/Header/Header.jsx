import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.snicker}>
        <h1>Сникер-магазин</h1>
      </div>
      <nav className={styles.nav}>
        <NavLink
          className={styles.navlink}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          Главная
        </NavLink>
        <NavLink
          className={styles.navlink}
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          Корзина
        </NavLink>
        <NavLink
          className={styles.navlink}
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          Контакты
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
