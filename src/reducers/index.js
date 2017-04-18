import {combineReducers} from "redux";
import quiz from "./quizReducer";
import questions from "./questionsReducer";
import answers from "./answersReducer";
import leaderboard from "./leaderboardReducer";
import nav from "./navReducer";
import user from "./userReducer";
import notification from "./notificationReducer";

const rootReducer = combineReducers({
  quiz,
  questions,
  answers,
  leaderboard,
  nav,
  user,
  notification
});

export default rootReducer;
