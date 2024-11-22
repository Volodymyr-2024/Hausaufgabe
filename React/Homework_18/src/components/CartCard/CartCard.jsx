import { useCart } from "../../context/CartContext";
import styles from "./CartCard.module.css";

function CartCard({ product }) {
  const { deleteFromCart } = useCart();
  const handleDeleteFromCart = () => {
    deleteFromCart(product.id);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <hr></hr>
      <h3>{product.name}</h3>
      <div className={styles.price_container}>
        <p className={styles.price_name}>Цена:</p>
        <p className={styles.price}>{product.price.toLocaleString()} $</p>
      </div>
      <button onClick={handleDeleteFromCart} className={styles.button}></button>
    </div>
  );
}

export default CartCard;
