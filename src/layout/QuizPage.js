import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as questionsActions from "../actions/questionsActions";
import QuestionContainer from "../containers/Question/QuestionContainer";
import Score from "../components/Common/Score";

export class QuizPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      quiz: {
        currentQuestion: 0,
        loading: false,
        start: false,
        score: 0,
      },
      questions: {
        list: [],
        isFetching: false,
        error: false,
        current: {},
        last: false,
      },
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  startQuiz() {
    this.props.actions.loadQuestions(this.state.questions);
  }

  nextQuestion() {
    return this.props.actions.nextQuestions(this.props.questions);
  }

  componentWillMount() {

  }

  render() {
    if (this.props.questions.error) {
      return (<p className="error">Error while fetching data</p>)
    }

    if (this.props.questions.isFetching) {
      return <p className="loading isFetching">Fetching Questions</p>
    }

    if (!this.props.questions.list) {
      return <a onClick={this.startQuiz}>Start quiz</a>
    }

    if (!this.props.questions.current) {
      return <p>No question</p>
    }

    return (
      <div className="quiz-page">
        <Score points={this.props.questions.current.score} />

        <QuestionContainer
          questions={this.props.questions}
          goToNextQuestion={this.nextQuestion} />
      </div>
    );
  }
}

QuizPage.propTypes = {
  actions: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage)
