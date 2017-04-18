import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as notificationsActionsCreators from "../../actions/notificationActions";
import './Notification.css';

import ProgressBar from "react-toolbox/lib/progress_bar";

export class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: {
        error: null,
        loader: null,
        success: null,
      }
    };

    this.removeToastr = this.removeToastr.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.error) {
      this.removeToastr(() => {
        this.props.notificationActions.removeError(this.state.notification);
      });
    }

    if (nextProps.notification.loader) {
      this.removeToastr(() => {
        this.props.notificationActions.removeLoader(this.state.notification);
      });
    }

    if (nextProps.notification.success) {
      this.removeToastr(() => {
        this.props.notificationActions.removeSuccess(this.state.notification);
      });
    }
  }

  removeToastr(callback) {
    return setTimeout(() => {
      callback();
    }, 2000)
  }

  render() {
    return (
      <div className="notification-wrapper">
        {this.props.notification.loader && (
          <ProgressBar type="linear" mode="indeterminate"/>
        )}

        {this.props.notification.error && (
          <div className="notification error">Error {this.props.notification.error}</div>
        )}

        {this.props.notification.success && (
          <div className="notification success">Success {this.props.notification.success}</div>
        )}
      </div>
    )
  }
}

Notifications.propTypes = {
  notification: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    notification: state.notification,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    notificationActions: bindActionCreators(notificationsActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)
