import React, {Component, PropTypes} from "react";
import Question from "../../components/Question/Question";
import AnswerOption from "../../components/Answer/AnswerOption";

export default class QuestionContainer extends Component {
  render() {
    if (!this.props.questions) {
      return (<div>[...]</div>)
    }

    if (this.props.questions.error) {
      return (<div className="error">Error while fetching data</div>)
    }

    if (this.props.questions.isFetching) {
      return <p className="loading">Fetching Questions</p>
    }

    if (!this.props.questions.list) {
      return <p>No questions</p>
    }

    return (
      <div className="question-container">
        <ul>
          {this.props.questions.list.map(question => {
            return (
              <div key={question.id}>
                <Question
                  question={question}
                  id={question.id}
                  score={question.score} />

                {question.answers.map(answer => {
                  return <AnswerOption
                    key={answer.id}
                    type={"answer-" + question.type + '-' + answer.id}
                    content={answer.title} />
                })}
              </div>
            )
          })}

        </ul>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  questions: PropTypes.object.isRequired,
};
