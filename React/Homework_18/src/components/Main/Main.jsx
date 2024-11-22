import { useState } from "react";
import styles from "./Main.module.css";
import { useEffect } from "react";
import axios from "axios";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";

function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/productData"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка приполучении данных", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <News />
      <h1>Товары</h1>
      <hr></hr>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Main;
