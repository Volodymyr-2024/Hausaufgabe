import { useDispatch } from "react-redux";
import styles from "./Question.module.css";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";

function Question({ id, question, options }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(answerQuestion({ id, answer: e.target.value }));
  };

  return (
    <div className={styles.question}>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index} className={styles.question_input}>
          <input
            type="radio"
            name={`question-${id}`}
            value={option}
            onChange={handleChange}
          />
          {option}
        </div>
      ))}
    </div>
  );
}

export default Question;
