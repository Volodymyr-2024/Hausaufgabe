import styles from "../styles/PostList.module.css";
import LogoPost from "../assets/logo_post.svg";

export default function PostList({ data, deletePost }) {
  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <div className={styles.container}>
      <h1>Список постов</h1>
      {data.map((post) => (
        <div key={post.id} className={styles.list_container}>
          <div className={styles.logo_container}>
            <img src={LogoPost} alt="LogoPost" />
            <p>User logo</p>
          </div>
          <div className={styles.post_container}>
            <h2>{post.heading}</h2>
            <p>{post.content}</p>
          </div>
          <div className={styles.id_container}>
            <p>id: {post.id}</p>
            <button onClick={() => handleDelete(post.id)}>Удалить</button>
          </div>
        </div>
      ))}
      <button>Далее</button>
    </div>
  );
}
