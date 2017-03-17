import { combineReducers } from 'redux';
import quiz from './quizReducer';

const rootReducer = combineReducers({
  quiz
});

export default rootReducer;
