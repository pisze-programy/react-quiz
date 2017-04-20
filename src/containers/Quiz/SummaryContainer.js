import React, {Component, PropTypes} from "react";
import AnswersList from "../../components/Answer/AnswerList";
import "./SummaryContainer.css";

export default class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.checkLevelCoverage = this.checkLevelCoverage.bind(this);
    this.calcTotalAvailablePoints = this.calcTotalAvailablePoints.bind(this);
    this.calcAverageAnswerTime = this.calcAverageAnswerTime.bind(this);
  }

  componentWillMount() {
    this.props.goToSummary();
  }

  checkLevelCoverage() {
    let coverage = 0;
    let status = 0;

    this.props.answers.list.map(answer => {
      if (answer.status) {
        status += 1;
      }

      return answer;
    });

    coverage = (status / this.props.questions.list.length) * 100;

    return coverage;
  }

  calcTotalAvailablePoints() {
    let total = 0;

    this.props.answers.list.map(answer => total += answer.question.score);

    return total;
  }

  calcAverageAnswerTime() {
    let avg = 0;

    this.props.answers.list.map(answer => avg += answer.time);

    return avg / this.props.answers.list.length / 1000;
  }

  render() {
    const coverage = this.checkLevelCoverage();
    const points = this.props.calcPoints();
    const avgTime = this.calcAverageAnswerTime();

    let summaryActionButton = <button className="button expanded" onClick={this.props.goToCurrentLevel}>Try again</button>;

    if (coverage >= this.props.quiz.levels[this.props.questions.level].coverage) {
      summaryActionButton = (
        <button className="button expanded" onClick={this.props.goToNextLevel}>Go to next level</button>
      );
    }

    return (
      <div className="quiz-summary">
        <div className="row">
          <div className="spacer s2" />

          <div className="small-12 column">

            <div className="summary-head text-center">

              <div className="row">
                <div className="small-12 medium-4 columns percent-section">
                  <span className="summary-value">{coverage}<span className="percent-sign">%</span></span>
                  <p>Correct</p>
                </div>

                <div className="small-12 medium-4 columns time-section">
                  <span className="summary-value">{avgTime}s</span>
                  <p>Seconds Avg to Answer</p>
                </div>

                <div className="small-12 medium-4 columns score-section">
                  <span className="summary-value">+ {points}</span>
                  <p>Your Score</p>
                </div>
              </div>

            </div>
          </div>

          <div className="small-12 column">
            <AnswersList answers={this.props.answers.list}/>
          </div>

          <div className="spacer s2" />
          <hr/>
          <div className="spacer s2" />

          <div className="small-12 medium-6 columns">
            <button className="button expanded" onClick={() => this.props.loadQuizLevels(this.props.quiz.current.id)}>
              Back to level list
            </button>
          </div>

          <div className="small-12 medium-6 columns large-text-right">
            {summaryActionButton}
          </div>

        </div>
      </div>
    );
  }
}

SummaryContainer.propTypes = {
  goToCurrentLevel: PropTypes.func.isRequired,
  loadQuizLevels: PropTypes.func.isRequired,
  goToNextLevel: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  goToSummary: PropTypes.func.isRequired,
  calcPoints: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
};
