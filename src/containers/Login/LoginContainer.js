import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionsCreators from "../../actions/userActions";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: null,
        password: null,
        isFetching: false,
        error: null,
      }
    };

    this.login = this.login.bind(this);
  }

  login() {
    const prepare = {
      username: "admin",
      password: "admin"
    };

    this.setState({
      user: Object.assign({}, this.state.user, this.props.user, prepare)
    });

    this.props.userActions.login(this.state.user);

    this.setState({
      user: Object.assign({}, this.state.user, {password: null})
    })
  }

  render() {
    return (
      <form>
        <div className="row column log-in-form">
          <h4 className="text-center">Log in with you email account</h4>

          <label>Email
            <input type="text" placeholder="somebody@example.com" />
          </label>

          <label>Password
            <input type="text" placeholder="Password" />
          </label>

          <p><a type="submit" onClick={this.login} className="button expanded">Log In</a></p>
        </div>
      </form>
    );
  }
}

LoginContainer.propTypes = {
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
)(LoginContainer)
