import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as questionsActions from "../actions/questionsActions";
import QuestionContainer from "../containers/Question/QuestionContainer"

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
      },
    };

    this.startQuiz = this.startQuiz.bind(this);
  }

  startQuiz() {
    this.props.actions.loadQuestions(this.state.questions);
  }

  render() {
    if (this.state.quiz.loading) {
      return (<div className="loading">LOADING</div>)
    }

    return (
      <div>
        <a onClick={this.startQuiz}>Start quiz</a>

        <QuestionContainer questions={this.props.questions} />
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
