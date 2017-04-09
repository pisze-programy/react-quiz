import {combineReducers} from "redux";
import quiz from "./quizReducer";
import questions from "./questionsReducer";
import answers from "./answersReducer";
import leaderboard from "./leaderboardReducer";

const rootReducer = combineReducers({
  quiz,
  questions,
  answers,
  leaderboard
});

export default rootReducer;
