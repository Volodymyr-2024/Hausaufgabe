import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";
import CartCard from "../CartCard/CartCard";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      <hr></hr>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div className={styles.cart_container}>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div className={styles.total}>
            <h2>Итого</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <hr></hr>
            <div>
              <p className={styles.price_name}>Цена: </p>
              <p className={styles.price}>{totalPrice.toLocaleString()} $</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
