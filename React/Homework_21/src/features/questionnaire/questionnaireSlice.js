import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Question 1?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 2,
      question: "Question 2?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 3,
      question: "Question 3?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 4,
      question: "Question 4?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 5,
      question: "Question 5?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
  ],
  score: 0,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      const correctAnswers = {
        1: "Option 1",
        2: "Option 2",
        3: "Option 1",
        4: "Option 2",
        5: "Option 2",
      };
      state.score = state.questions.reduce((score, q) => {
        return correctAnswers[q.id] === q.answer ? score + 1 : score;
      }, 0);
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
