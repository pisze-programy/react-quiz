import React, {Component, PropTypes} from "react";
import Question from "../../components/Question/Question";
import AnswerOption from "../../components/Answer/AnswerOption";
import QuestionCounter from "../../components/Question/QuestionCounter";
import TimeProgress from '../../components/Common/TimeProgress';

export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stopTimeCounter: false,
      answer: {
        id: null,
        time: null,
        points: null,
        question: null,
      },
      timer: {
        value: 100,
        time: this.props.questions.current.time,
        buffer: 100,
      }
    };

    this.counting = null;

    this.onAnswerClick = this.onAnswerClick.bind(this);
    this.onTimeProgressEnd = this.onTimeProgressEnd.bind(this);
    this.runCounter = this.runCounter.bind(this);
    this.stopCounting = this.stopCounting.bind(this);
  }

  onAnswerClick(data) {
    const {id} = data;
    const answer = Object.assign({}, this.state.answer, {id, question: this.props.questions.current});

    this.stopCounting();

    this.setState({
      answer,
    });

    this.props.checkAnswerStatus({
      answer
    });
  }

  onTimeProgressEnd() {
    this.stopCounting();

    this.setState({
      timer: Object.assign({}, this.state.timer, {
        time: 0,
        value: 0,
      })
    });

    this.onAnswerClick({
      id: null,
      time: this.state.timer.time,
      points: this.state.timer.points,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions.current.id !== nextProps.questions.current.id) {
      this.setState({
        timer: Object.assign({}, this.state.timer, {
          time: nextProps.questions.current.time,
          value: 100,
        })
      });

      this.runCounter();
    }
  }

  componentWillMount() {
    this.runCounter();
  }

  runCounter () {
    this.counting = setInterval(() => {
      this.setState({
        timer: Object.assign({}, this.state.timer, {
          time: this.state.timer.time - this.state.timer.buffer,
          value: Math.round((this.state.timer.time / this.props.questions.current.time) * 100)
        })
      });

      if (this.state.timer.time <= 0) {
        return this.onTimeProgressEnd();
      }
    }, this.state.timer.buffer);
  }

  stopCounting() {
    clearInterval(this.counting);

    this.counting = null;
  }

  render() {
    return (
      <div className="question-container">
          <div>
            <TimeProgress
              value={this.state.timer.value}
              time={this.state.timer.time} />

            <QuestionCounter
              total={this.props.questions.list.length}
              current={this.props.questions.current.id + 1} />

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
  checkAnswerStatus: PropTypes.func.isRequired,
};
