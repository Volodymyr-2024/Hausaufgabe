import styles from "./Contacts.module.css";
import snapchat from "../../assets/snapchat.svg";
import twitter from "../../assets/twitter_contacts.svg";
import facebook from "../../assets/facebook_contacts.svg";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2>Контакты</h2>
      <hr />
      <ul>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.input}>
            <input type="text" placeholder="Ваш e-mail" />
            <input type="text" placeholder="Ваше имя" />
          </div>
          <textarea placeholder="Введите сообщение"></textarea>
          <button className={styles.button}>
            Отправить
          </button>
        </form>
        <div className={styles.container_icons}>
          <h4>Найдите нас:</h4>
          <div className={styles.icons}>
            <a href="https://www.snapchat.com/">
              <img src={snapchat} alt="snapchat" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
