import React, {Component, PropTypes} from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="medium-6 medium-centered large-4 large-centered columns">
          <form>
            <div className="row column log-in-form">
              <h4 className="text-center">Log in with you email account</h4>
              <label>Email
                <input type="text" placeholder="somebody@example.com" />
              </label>

              <label>Password
                <input type="text" placeholder="Password" />
              </label>
              <input id="show-password" type="checkbox" />
                <label htmlFor="show-password">Show password</label>
                <p><a type="submit" className="button expanded">Log In</a></p>
                <p className="text-center"><a href="#">Forgot your password?</a></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

  LoginPage.propTypes = {};
