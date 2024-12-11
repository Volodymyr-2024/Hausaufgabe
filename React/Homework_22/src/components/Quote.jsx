import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

function Quote() {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quotes);
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  const handleGetQuates = () => dispatch(fetchQuotes());
  return (
    <div className={styles.container}>
      <h1>Random Quote Generator</h1>
      {status === "loading" && (
        <p style={{ padding: "20px", fontSize: "24px", minHeight: "150px" }}>
          Loading...
        </p>
      )}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className={styles.container_quote}>
          <p className={styles.quote}>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      <button onClick={handleGetQuates}>New Quote</button>
    </div>
  );
}

export default Quote;
