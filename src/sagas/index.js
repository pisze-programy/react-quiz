import {fork} from "redux-saga/effects";
import {watchQuizList} from './loadQuizList';
import {watchLoadQuestions} from './loadQuestions';
import {watchStatusAnswer} from './statusAnswer';
import {watchLeaderboardList} from './loadLeaderboardList';

export default function* root() {
  yield [
    fork(watchQuizList),
    fork(watchLoadQuestions),
    fork(watchStatusAnswer),
    fork(watchLeaderboardList)
  ];
}
