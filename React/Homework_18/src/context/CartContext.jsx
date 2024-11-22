import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/cartData"
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных корзины", error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/cartData",
        product
      );
      setCartItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину", error);
    }
  };
  
  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://6718a7eb7fc4c5ff8f4a6aed.mockapi.io/cartData/${productId}`
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины", error);
    }
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
