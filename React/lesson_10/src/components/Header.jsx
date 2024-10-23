import logo from "../assets/logo.svg"
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.menu}>
        <li>Главная</li>
        <li>Музыка</li>
        <li>Сообщества</li>
        <li>Друзья</li>
      </ul>
    </div>
  );
}
