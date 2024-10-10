import styles from "./App.module.css"
import Logo from "./components/Logo";
import Main from "./components/Main";

function App() {
  return (
    <div className={styles.container}>
      <Logo />
      <Main />
    </div>
  );
}

export default App;
