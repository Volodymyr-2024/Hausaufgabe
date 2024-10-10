import logo from "../assets/logo.svg";
import styles from "../styles/Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
}
