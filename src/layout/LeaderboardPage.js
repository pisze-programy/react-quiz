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
    };

    this.isUserOnList = this.isUserOnList.bind(this);
  }

  componentWillMount() {
    this.props.leaderboardActions.loadLeaderboard(this.state.leaderboard);
  }

  isUserOnList() {
    const list = this.props.leaderboard.list;
    let i;

    for (i = 0; i < list.length; i++) {
      if (list[i].id === this.props.user.id) {
        return true;
      }
    }

    return false;
  }

  render() {
    let userBoard = null;

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

    if (!this.isUserOnList()) {
      userBoard = (
        <tr className="specialRow">
          <td>0</td>
          <td>YOU ARE FIRST!</td>
          <td>{this.props.user.score}</td>
        </tr>
      )
    }

    return (
      <div className="row column">
        Leaderboard
        <div className="spacer s2" />

        TOP 5:
        <div className="spacer s1" />

        <table>
          <tbody>
            {userBoard}
            {this.props.leaderboard.list.map((element, index) => {
              return (
                <tr key={element.id}>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  leaderboard: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    leaderboard: state.leaderboard,
    user: state.user,
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
