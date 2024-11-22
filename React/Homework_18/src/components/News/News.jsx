import styles from "./News.module.css";

function News() {
  return (
    <section className={styles.news}>
      <img
        src="https://i.imgur.com/A2Te7at.png"
        alt="Новости"
        className={styles.image}
      />
    </section>
  );
}

export default News;
