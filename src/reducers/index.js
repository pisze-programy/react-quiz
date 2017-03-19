import { combineReducers } from 'redux';
import quiz from './quizReducer';
import questions from './questionsReducer';

const rootReducer = combineReducers({
  quiz,
  questions
});

export default rootReducer;
