import { useState } from "react";
import Answer from "./Answer";
import "./MathQuiz.css"

export default function MathQuiz() {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 101);
  const [points, setPoints] = useState(0);
  function updatePoints(userAnswer) {
    if (userAnswer == a + b) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
  }
  return (
    <div className="math">
      <h1>Ваши очки: {points}</h1>
      <p>
        {a} + {b} = ?
      </p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
}
