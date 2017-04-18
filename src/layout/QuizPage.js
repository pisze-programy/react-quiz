import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {bindActionCreators} from "redux";
import * as questionsActionsCreators from "../actions/questionsActions";
import * as quizActionsCreators from "../actions/quizActions";
import * as answersActionsCreators from "../actions/answersActions";
import * as navActionsCreators from "../actions/navActions";
import * as userActionsCreators from "../actions/userActions";
import QuestionContainer from "../containers/Question/QuestionContainer";
import SummaryContainer from "../containers/Quiz/SummaryContainer";
import Levels from "../components/Quiz/Levels";

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
        levels: [],
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

    this.loadQuizLevels = this.loadQuizLevels.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswerStatus = this.checkAnswerStatus.bind(this);
    this.goToNav = this.goToNav.bind(this);
    this.goToNextLevel = this.goToNextLevel.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.calcPoints = this.calcPoints.bind(this);
  }

  componentWillMount() {
    this.props.quizActions.loadQuizList(this.state.quiz);
  }

  componentWillUnmount() {
    this.props.questionsActions.resetQuestions(this.state.questions);
    this.props.answersActions.resetAnswers(this.props.answers);
    this.props.quizActions.resetQuiz(this.state.quiz);
  }

  loadQuizLevels(id) {
    const prepare = Object.assign({}, this.state.quiz, this.props.quiz, {current: {id}});

    this.props.answersActions.resetAnswers(this.props.answers);
    this.props.questionsActions.resetActiveQuestionsLevel(this.props.questions);

    return this.props.quizActions.loadQuizLevels(prepare);
  }

  loadQuestions(id) {
    const prepare = Object.assign({}, this.state.questions, this.props.questions, {level: id});

    return this.props.questionsActions.loadQuestions(prepare);
  }

  nextQuestion() {
    this.props.answersActions.clearAnswer(this.props.answers);
    this.props.questionsActions.nextQuestion(this.props.questions);
  }

  goToSummary() {
    let points = this.calcPoints();
    const preparePoints = Object.assign({}, this.props.user, {score: this.props.user.score + points});

    this.props.questionsActions.resetCurrentQuestion(this.props.questions);
    this.props.userActions.addPoints(preparePoints);
  }

  goToNextLevel() {
    const id = this.props.questions.level + 1;

    this.props.answersActions.resetAnswers(this.props.answers);
    this.props.questionsActions.resetActiveQuestionsLevel(this.props.questions);

    this.loadQuestions(id);
  }

  goToNav(href) {
    this.props.nav.list.map((element, index) => {
      if (element.href === href) {
        browserHistory.push(href);

        return this.props.navActions.setNavActive(Object.assign({}, this.props.nav, {index}));
      }

      return false;
    });
  }

  calcPoints() {
    let points = 0;

    this.props.answers.list.map(answer => {
      if (answer.status) {
        return points += answer.points;
      }

      return answer;
    });

    return points
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

    if (this.props.questions.level === null && this.props.quiz.levels.length) {
      return (
        <Levels
          loadQuestions={this.loadQuestions}
          levels={this.props.quiz.levels} />
      )
    }

    if (this.props.answers.list && this.props.answers.list.length && !this.props.questions.current) {
      return (
        <SummaryContainer
          goToSummary={this.goToSummary}
          answers={this.props.answers}
          questions={this.props.questions}
          quiz={this.props.quiz}
          calcPoints={this.calcPoints}
          loadQuizLevels={this.loadQuizLevels}
          goToNextLevel={this.goToNextLevel} />
      )
    }

    if (this.props.questions.list && this.props.questions.list.length) {
      return (
        <QuestionContainer
          nextQuestion={this.nextQuestion}
          answers={this.props.answers}
          questions={this.props.questions}
          checkAnswerStatus={this.checkAnswerStatus}/>
      )
    }

    return (
      <div className="quiz-page">
        <div className="row">
          {this.props.quiz.list.map(quiz => {
            return (
              <div key={quiz.id} className="small-12 medium-6 large-4 column">
                <Card>
                  <CardMedia
                    onClick={() => this.loadQuizLevels(quiz.id)}
                    aspectRatio="wide"
                    image={`https://placeimg.com/800/450/animals?${quiz.id}`}/>
                  <CardTitle title={quiz.title}/>
                  <CardText>{quiz.description}</CardText>
                  <CardActions>
                    <Button label="Start Quiz" onClick={() => this.loadQuizLevels(quiz.id)}/>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </div>
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
  user: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    questions: state.questions,
    answers: state.answers,
    quiz: state.quiz,
    nav: state.nav,
    user: state.user,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    questionsActions: bindActionCreators(questionsActionsCreators, dispatch),
    answersActions: bindActionCreators(answersActionsCreators, dispatch),
    quizActions: bindActionCreators(quizActionsCreators, dispatch),
    navActions: bindActionCreators(navActionsCreators, dispatch),
    userActions: bindActionCreators(userActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage)
