import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as leaderboardActionsCreators from "../actions/leaderboardActions";
import ProgressBar from "react-toolbox/lib/progress_bar";

export class LeaderboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaderboard: {
        list: [],
        isFetching: true,
        error: false,
      }
    }
  }

  componentWillMount() {
    this.props.leaderboardActions.loadLeaderboard(this.state.leaderboard);
  }

  render() {
    if (this.props.leaderboard.isFetching) {
      return (
        <div>
          <p className="loading">Loading...</p>
          <ProgressBar type="linear" mode="indeterminate"/>
        </div>
      )
    }

    if (this.props.leaderboard.error) {
      return (<p className="error">Error while fetching data</p>)
    }

    if (!this.props.leaderboard.list) {
      return (
        <div>
          <p>No leaderboard yet, do some tests!</p>
        </div>
      )
    }

    return (
      <div className="leaderboard-page">
        Leaderboard

        <br/>

        <table>
          <tbody>
            {this.props.leaderboard.list.map(element => {
              return <tr key={element.id}>
                <th>{element.id}</th>
                <th>{element.name}</th>
                <th>{element.points}</th>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  leaderboard: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    leaderboard: state.leaderboard
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    leaderboardActions: bindActionCreators(leaderboardActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderboardPage)
