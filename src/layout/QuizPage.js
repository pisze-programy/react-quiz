import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {bindActionCreators} from "redux";
import * as questionsActionsCreators from "../actions/questionsActions";
import * as quizActionsCreators from "../actions/quizActions";
import * as answersActionsCreators from "../actions/answersActions";
import * as navActionsCreators from "../actions/navActions";
import QuestionContainer from "../containers/Question/QuestionContainer";

import ProgressBar from "react-toolbox/lib/progress_bar";
import Card from "react-toolbox/lib/card/Card";
import CardMedia from "react-toolbox/lib/card/CardMedia";
import CardActions from "react-toolbox/lib/card/CardActions";
import CardText from "react-toolbox/lib/card/CardText";
import CardTitle from "react-toolbox/lib/card/CardTitle";
import Button from "react-toolbox/lib/button/Button";

export class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        list: [],
        isFetching: false,
        error: false,
        start: false,
        ready: false,
        current: {},
        score: 0
      },
      questions: {
        list: [],
        isFetching: false,
        error: false,
        level: null,
        current: null,
      },
      answers: {
        list: [],
        isFetching: false,
        error: false,
        current: {},
      }
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswerStatus = this.checkAnswerStatus.bind(this);
    this.goToLeaderBoard = this.goToLeaderBoard.bind(this);
  }

  componentWillMount() {
    this.props.quizActions.loadQuizList(this.state.quiz);
  }

  componentWillUnmount() {
    this.props.questionsActions.resetQuestions(this.state.questions);
    this.props.answersActions.clearAnswer(this.props.answers);
    this.props.answersActions.resetAnswers(this.props.answers);
    this.props.quizActions.resetQuiz(this.state.quiz);
  }

  startQuiz(id) {
    const prepare = Object.assign({}, this.state.quiz, this.props.quiz, {current: {id}});

    this.props.answersActions.resetAnswers(this.props.answers);
    this.props.questionsActions.resetActiveQuestionsLevel(this.props.questions);

    return this.props.quizActions.startQuiz(prepare);
  }

  loadQuestions(id) {
    const prepare = Object.assign({}, this.state.questions, this.props.questions, {level: id});

    return this.props.questionsActions.loadQuestions(prepare);
  }

  nextQuestion() {
    this.props.answersActions.clearAnswer(this.props.answers);

    return this.props.questionsActions.nextQuestion(this.props.questions);
  }

  goToLeaderBoard() {
    this.props.nav.list.map((element, index) => {
      if (element.href === '/leaderboard') {
        browserHistory.push('/leaderboard');

        return this.props.navActions.setNavActive(Object.assign({}, this.props.nav, {index}));
      }

      return false;
    });
  }

  checkAnswerStatus(data) {
    const prepare = Object.assign(
      {},
      this.state.answers,
      this.props.answers,
      {
        current: {
          id: data.answer.id,
          points: data.answer.points,
          time: data.answer.time,
          question: data.answer.question,
        }
      }
    );

    this.props.answersActions.statusAnswer(prepare);
  }

  render() {
    if (!this.props.quiz.ready) {
      return (
        <div>
          <p>Special page loader</p>
          <ProgressBar type="linear" mode="indeterminate"/>
        </div>
      )
    }

    if (this.props.quiz.isFetching || this.props.questions.isFetching || this.props.answers.isFetching) {
      return (
        <div>
          <p className="loading">Loading...</p>
          <ProgressBar type="linear" mode="indeterminate"/>
        </div>
      )
    }

    if (this.props.quiz.error || this.props.questions.error || this.props.answers.error) {
      return (<p className="error">Error while fetching data</p>)
    }

    if (!this.props.quiz.start && this.props.quiz.list && this.props.quiz.list.length) {
      return (
        <div className="row">
          {this.props.quiz.list.map(quiz => {
            return (
              <div key={quiz.id} className="small-12 medium-6 large-4 column">
                <Card>
                  <CardMedia
                    onClick={() => this.startQuiz(quiz.id)}
                    aspectRatio="wide"
                    image={`https://placeimg.com/800/450/animals?${quiz.id}`} />
                  <CardTitle title={quiz.title} />
                  <CardText>{quiz.description}</CardText>
                  <CardActions>
                    <Button label="Start Quiz" onClick={() => this.startQuiz(quiz.id)}/>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </div>
      )
    }

    if (this.props.questions.level === null && this.props.quiz.list && this.props.quiz.list.length) {
      return(
        <div>
          {this.props.quiz.list[this.props.quiz.current.id].levels.map(level => {
            return (
              <div key={level.id}>
                <button type="button" className="button primary" disabled={!level.unlocked} onClick={() => this.loadQuestions(level.id)}>Level: {level.id}</button>
              </div>
            )
          })}
        </div>
      )
    }

    if (!this.props.questions.current) {
      let points = 0;
      let total = 0;

      this.props.answers.list.map(answer => {
        points += answer.points;
        total += answer.question.score;

        return answer;
      });

      return (
        <div className="no-more-questions">
          <p>You received a {points} of total {total} score</p>
          <p>No more questions</p>
          <div>
            <a onClick={() => this.startQuiz(this.props.quiz.current.id)}>Back to level list</a>
          </div>
          <div>
            <a>Go to next level</a>{/*onClick={this.nextLevel}*/}
          </div>
          <a onClick={this.goToLeaderBoard}>Show Leaderboard</a>
        </div>
      )
    }

    return (
      <div className="quiz-page">
        <QuestionContainer
          nextQuestion={this.nextQuestion}
          answers={this.props.answers}
          questions={this.props.questions}
          checkAnswerStatus={this.checkAnswerStatus}/>
      </div>
    );
  }
}

QuizPage.propTypes = {
  questionsActions: PropTypes.object.isRequired,
  answersActions: PropTypes.object.isRequired,
  quizActions: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    questions: state.questions,
    answers: state.answers,
    quiz: state.quiz,
    nav: state.nav,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    questionsActions: bindActionCreators(questionsActionsCreators, dispatch),
    answersActions: bindActionCreators(answersActionsCreators, dispatch),
    quizActions: bindActionCreators(quizActionsCreators, dispatch),
    navActions: bindActionCreators(navActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage)
