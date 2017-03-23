import React, {Component, PropTypes} from "react";
import Question from "../../components/Question/Question";
import AnswerOption from "../../components/Answer/AnswerOption";
import QuestionCounter from "../../components/Question/QuestionCounter";

export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {
        questionId: null,
        answerId: null
      },
    };

    this.onAnswerClick = this.onAnswerClick.bind(this);
  }

  onAnswerClick(data) {
    const {answerId} = data;
    const answer = Object.assign({}, this.state.answer, {answerId, questionId: this.props.questions.current.id});

    this.setState({
      answer
    });

    this.props.goToNextQuestion({
      answerId
    });
  }

  render() {
    return (
      <div className="question-container">
          <div>
            <QuestionCounter total={this.props.questions.list.length} current={this.props.questions.current.id + 1} />

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
