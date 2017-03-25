import {combineReducers} from "redux";
import quiz from "./quizReducer";
import questions from "./questionsReducer";
import answers from "./answersReducer";

const rootReducer = combineReducers({
  quiz,
  questions,
  answers
});

export default rootReducer;
