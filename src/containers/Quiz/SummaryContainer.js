import React, {Component, PropTypes} from "react";
import AnswersList from "../../components/Answer/AnswerList";

export default class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.checkLevelCoverage = this.checkLevelCoverage.bind(this);
    this.calcTotalAvailablePoints = this.calcTotalAvailablePoints.bind(this);
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

  render() {
    const coverage = this.checkLevelCoverage();
    const points = this.props.calcPoints();
    const total = this.calcTotalAvailablePoints();

    return (
      <div className="quiz-summary">
        <div className="row">
          <div className="small-12 column">
            <p>No more questions</p>

            <p>Coverage {coverage}%</p>

            <p>You received a {points} of total {total} score</p>
          </div>

          <hr/>

          <div className="small-12 column">
            <div className="row">
              <div className="small-12 medium-6 columns">
                <a onClick={() => this.props.loadQuizLevels(this.props.quiz.current.id)}>Back to level list</a>
              </div>
              <div className="small-12 medium-6 columns large-text-right">
                {coverage >= this.props.quiz.levels[this.props.questions.level].coverage && (
                  <a onClick={this.props.goToNextLevel}>Go to next level</a>
                )}
              </div>
            </div>

            <AnswersList answers={this.props.answers.list}/>

          </div>
        </div>
      </div>
    );
  }
}

SummaryContainer.propTypes = {
  loadQuizLevels: PropTypes.func.isRequired,
  goToNextLevel: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  goToSummary: PropTypes.func.isRequired,
  calcPoints: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
};
