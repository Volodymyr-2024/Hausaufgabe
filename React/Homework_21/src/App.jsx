import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";

function App() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="App">
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question
          key={q.id}
          id={q.id}
          question={q.question}
          options={q.options}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <Result />
    </div>
  );
}

export default App;
