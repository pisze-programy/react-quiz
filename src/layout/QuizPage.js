import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import * as questionsActionsCreators from "../actions/questionsActions";
import * as quizActionsCreators from "../actions/quizActions";
import * as answersActionsCreators from "../actions/answersActions";
import QuestionContainer from "../containers/Question/QuestionContainer";
import Score from "../components/Common/Score";
import AnswerStatus from "../components/Answer/AnswerStatus";

export class QuizPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      quiz: {
        loading: false,
        start: false,
        finish: false,
        score: 0,
      },
      questions: {
        list: [],
        isFetching: false,
        error: false,
        current: {},
        last: false,
      },
      answers: {
        list: [],
        isFetching: false,
        error: false,
        current: {},
      }
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswerStatus = this.checkAnswerStatus.bind(this);
  }

  componentWillUnmount () {
    this.props.questionsActions.resetQuestions(this.props.questions);
    this.props.quizActions.resetQuiz(this.state.quiz);
  }

  startQuiz() {
    return this.props.quizActions.startQuiz(this.state.quiz);
  }

  finishQuiz() {
    return this.props.quizActions.finishQuiz(this.state.quiz);
  }

  loadQuestions() {
    return this.props.questionsActions.loadQuestions(this.state.questions);
  }

  nextQuestion() {
    this.props.answersActions.clearAnswer(this.props.answers);

    return this.props.questionsActions.nextQuestion(this.props.questions);
  }

  checkAnswerStatus(data) {
    if (this.props.answers.current) return;

    const prepare = Object.assign(
      {},
      this.state.answers,
      this.props.answers,
      {
        current: {
          answerId: data.answer.answerId,
          questionId: data.answer.questionId,
        },
      }
    );

    return this.props.answersActions.statusAnswer(prepare);
  }

  render() {
    if (this.props.quiz.finish) {
      return <div className="finish">Finish</div>;
    }

    if (!this.props.quiz.start) {
      return <a className="start-quiz" onClick={this.startQuiz}>Start quiz</a>
    }

    if (this.props.quiz.loading) {
      return (<p className="loading">Loading...</p>)
    }

    if (this.props.questions.error) {
      return (<p className="error">Error while fetching data</p>)
    }

    if (this.props.questions.isFetching) {
      return <p className="is-fetching">Fetching Questions</p>
    }

    if (!this.props.questions.list) {
      return <a className="fetch-questions" onClick={this.loadQuestions}>Fetch Questions</a>
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
        <Score points={this.props.questions.current.score} />

        <QuestionContainer
          questions={this.props.questions}
          checkAnswerStatus={this.checkAnswerStatus} />

        {this.props.answers &&
          <AnswerStatus
            answer={this.props.answers}
            closeAction={this.nextQuestion} />
        }
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
