import styles from "./footer.module.css";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import instagramLogo from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className={styles.footerLeft}>
        <p>Контакты</p>
        <div className={styles.span}>
          <span>8 800 000 00 00</span>
          <span>emailexample@email.com</span>
        </div>
        <div className={styles.snicker}>
          2024 Сникер-магазин. Все права защищены
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.icons}>
          <a href="https://www.facebook.com">
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a href="https://x.com">
            <img src={twitterLogo} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagramLogo} alt="instagram" />
          </a>
        </div>
        <input type="text" placeholder="Введите свой email:" />
      </div>
    </footer>
  );
}

export default Footer;
