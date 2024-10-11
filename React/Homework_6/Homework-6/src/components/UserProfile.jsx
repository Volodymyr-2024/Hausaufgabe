import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

const fetchUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных", error);
    return null;
  }
};

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
      setLoading(false);
    };
    loadUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const loadUser = async () => {
    const userData = await fetchUser();
    setUser(userData);
  };
  return (
    <div className={styles.container}>
      <img src={user.results[0].picture.large} alt="User foto" />
      <h1>
        {user.results[0].name.first} {user.results[0].name.last}
      </h1>
      <p>Email: {user.results[0].email}</p>
      <p>Phone: {user.results[0].phone}</p>
      <button onClick={loadUser}>Load New User</button>
    </div>
  );
}
