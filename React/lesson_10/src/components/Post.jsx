import { useEffect, useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import styles from "../styles/Post.module.css";

export default function Post() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = "https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    const url = `https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/posts/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      setData((prevData) => prevData.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <PostList data={data} deletePost={deletePost} />
      <PostForm fetchData={fetchData} />
    </div>
  );
}
