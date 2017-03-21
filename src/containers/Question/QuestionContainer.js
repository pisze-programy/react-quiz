import React, {Component, PropTypes} from "react";
import Question from "../../components/Question/Question";
import AnswerOption from "../../components/Answer/AnswerOption";

export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {
        questionId: 0,
        answerId: 0
      },
    };

    this.onAnswerClick = this.onAnswerClick.bind(this);
  }

  onAnswerClick(data) {
    const {answerId} = data;

    this.props.goToNextQuestion({
      answerId
    })
  }

  render() {
    if (this.props.questions.error) {
      return (<div className="error">Error while fetching data</div>)
    }

    if (this.props.questions.isFetching) {
      return <p className="loading">Fetching Questions</p>
    }

    if (!this.props.questions.current) {
      return <p>No question</p>
    }

    return (
      <div className="question-container">
          <div>
            <Question question={this.props.questions.current} />

            {this.props.questions.current.answers.map(answer => {
              return <AnswerOption
                onClickHandle={this.onAnswerClick}
                key={answer.id}
                id={answer.id.toString()}
                type={"answer-" + this.props.questions.current.type + '-' + answer.id}
                content={answer.title} />
            })}
          </div>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  questions: PropTypes.object.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};
