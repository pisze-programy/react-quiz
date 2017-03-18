import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizActions from '../actions/quizActions';

export class QuizPage extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    const loading = false;

    if (loading) {
      return (<div className="loading">LOADING</div>)
    }

    return (
      <div>
        yep
      </div>
    );
  }
}

QuizPage.propTypes = {
  actions: PropTypes.object.isRequired
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    quiz: state.quiz
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(quizActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage)
