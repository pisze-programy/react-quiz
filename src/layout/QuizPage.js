import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import * as questionsActionsCreators from "../actions/questionsActions";
import * as quizActionsCreators from "../actions/quizActions";
import * as answersActionsCreators from "../actions/answersActions";
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
        start: false,
        ready: false,
        score: 0
      },
      questions: {
        list: [],
        isFetching: false,
        error: false,
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
  }

  componentWillMount() {
    this.props.quizActions.loadQuizList(this.state.quiz);
  }

  componentWillUnmount() {
    this.props.questionsActions.resetQuestions(this.state.questions);
    this.props.quizActions.resetQuiz(this.state.quiz);
  }

  startQuiz() {
    return this.props.quizActions.startQuiz(this.props.quiz);
  }

  loadQuestions() {
    return this.props.questionsActions.loadQuestions(this.state.questions);
  }

  nextQuestion() {
    this.props.answersActions.clearAnswer(this.props.answers);

    return this.props.questionsActions.nextQuestion(this.props.questions);
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
                    onClick={this.startQuiz}
                    aspectRatio="wide"
                    image={`https://placeimg.com/800/450/animals?${quiz.id}`} />
                  <CardTitle title={quiz.title} />
                  <CardText>{quiz.description}</CardText>
                  <CardActions>
                    <Button label="Start Quiz" onClick={this.startQuiz}/>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </div>
      )
    }

    if (!this.props.questions.list || !this.props.questions.list.length) {
      return <a className="fetch-questions" onClick={this.loadQuestions}>Fetch Questions - level 1</a>
    }

    if (!this.props.questions.current) {
      return (
        <div className="no-more-questions">
          <p>No more questions</p>
          <Link to="/leaderboard">Show Leaderboard</Link>
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
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    questions: state.questions,
    answers: state.answers,
    quiz: state.quiz,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    questionsActions: bindActionCreators(questionsActionsCreators, dispatch),
    answersActions: bindActionCreators(answersActionsCreators, dispatch),
    quizActions: bindActionCreators(quizActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage)
