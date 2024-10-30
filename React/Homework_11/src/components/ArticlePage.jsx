import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./ArticlePage.module.css";

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  function goToBack() {
    navigate("/articles");
  }
  return (
    <div className={styles.container}>
      <h1>Статья {id}</h1>
      <p>Содержание статьи {id} ...</p>
      <p>Текущий путь: {location.pathname}</p>
      <button onClick={goToBack}>Назад</button>
    </div>
  );
}
