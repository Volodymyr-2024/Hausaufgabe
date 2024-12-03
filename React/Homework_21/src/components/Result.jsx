import { useSelector } from "react-redux";

function Result() {
  const { score, submitted } = useSelector((state) => state.questionnaire);

  if (!submitted) {
    return null;
  }

  return (
    <div>
      <h2>Your Score: {score}</h2>
    </div>
  );
}

export default Result;
