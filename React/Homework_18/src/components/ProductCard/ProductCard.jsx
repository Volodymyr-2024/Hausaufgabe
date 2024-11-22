import styles from "./ProductCard.module.css";
import { useCart } from "../../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className={styles.container}>
        <div>
          <p className={styles.price_name}>Цена:</p>
          <p className={styles.price}>{product.price} $</p>
        </div>
        <button onClick={handleAddToCart} className={styles.button}></button>
      </div>
    </div>
  );
}

export default ProductCard;
