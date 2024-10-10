import { useState } from "react";
import "./Answer.css"

export default function Answer({ updatePoints }) {
  const [userAnswer, setUserAnswer] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer("");
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          placeholder="Введите ответ"
        />
        <button>Проверить</button>
      </form>
    </div>
  );
}
