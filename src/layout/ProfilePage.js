import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionsCreators from "../actions/userActions";
import LoginContainer from "../containers/Login/LoginContainer";

import ProgressBar from "react-toolbox/lib/progress_bar";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.logout = this.logout.bind(this);
  }

  logout() {
    return this.props.userActions.logout();
  }

  render() {
    if (this.props.user.isFetching) {
      return (
        <div>
          <p className="loading">Loading...</p>
          <ProgressBar type="linear" mode="indeterminate"/>
        </div>
      );
    }

    if (this.props.user.error) {
      return (<p className="error">Error while fetching data</p>)
    }

    if (!this.props.user.isAuthenticated) {
      return (
        <div>
          <hr/>

          <div className="row">
            <div className="small-12 medium-6 medium-offset-3 column">
              <LoginContainer />
            </div>
          </div>

          <hr/>

          <div className="row column">
            <h4 className="text-center">Or Register:</h4>
            <div className="text-center">[...]</div>
          </div>
        </div>
      )
    }

    return (
      <div className="profile-page">
        <div className="row">
          <div className="small-12 text-right column">
            <a onClick={this.logout}>Logout</a>
          </div>

          <div className="small-12 column">
            Your Profile Page:

            You got {this.props.user.score} points.
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  userActions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
