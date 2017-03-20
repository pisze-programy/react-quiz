import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as questionsActions from "../actions/questionsActions";

export class QuizPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      quiz: {
        currentQuestion: 0,
        error: false,
        isFetching: false,
        loading: false,
        start: false,
        questions: [],
        score: 0,
      }
    };
  }

  render() {
    if (this.state.quiz.error) {
      return (<div className="error">Error while fetching data</div>)
    }

    if (this.state.quiz.loading) {
      return (<div className="loading">LOADING</div>)
    }

    if (this.state.quiz.isFetching) {
      return <p className="loading">Fetching Questions</p>
    }

    return (
      <div>
        <button>Start quiz</button>
      </div>
    );
  }
}

QuizPage.propTypes = {
  actions: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
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
