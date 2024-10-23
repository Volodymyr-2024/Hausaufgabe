import LogoPost from "../assets/Logo_post.svg";
import { useForm } from "react-hook-form";
import styles from "../styles/PostForm.module.css";

export default function PostForm({ fetchData }) {
  const { register, handleSubmit, reset } = useForm();

  const sendPostRequest = async (data) => {
    const url = "https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/posts";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Ответ сервера:", result);
      fetchData();
      reset();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  function onSubmit(data) {
    console.log(data);
    sendPostRequest(data);
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>Написать пост</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={LogoPost} alt="LogoPost" />
        <div>
          <label htmlFor="heading">
            Заголовок
            <input
              type="text"
              id="heading"
              placeholder="Заголовок"
              {...register("heading", { required: true })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Текст поста
            <input
              type="text"
              id="content"
              placeholder="Введите текст..."
              {...register("content", { required: true })}
            />
          </label>
        </div>
        <button type="submit">Публикация</button>
      </form>
    </div>
  );
}
