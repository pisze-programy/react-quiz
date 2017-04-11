import {combineReducers} from "redux";
import quiz from "./quizReducer";
import questions from "./questionsReducer";
import answers from "./answersReducer";
import leaderboard from "./leaderboardReducer";
import nav from "./navReducer";

const rootReducer = combineReducers({
  quiz,
  questions,
  answers,
  leaderboard,
  nav
});

export default rootReducer;
