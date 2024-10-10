import styles from "../styles/Main.module.css";
import Icon from "./Icon";

export default function Main() {
  return (
    <div className={styles.container}>
      <h1>Life is wasted on the living</h1>
      <p>Sign in</p>
      <p>with</p>
      <Icon />
    </div>
  );
}
