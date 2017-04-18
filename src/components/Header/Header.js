import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from 'react-router';
import * as navActionsCreators from "../../actions/navActions";

import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      list: [
        {label: 'Quiz', href: '/'},
        {label: 'Leaderboard', href: '/leaderboard'},
        {label: 'About', href: '/about'},
        {label: 'Profile', href: '/profile'},
      ],
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillMount() {
    /* Set active nav element before component mounted */
    this.state.list.map((element, index) => {
      if (element.href === location.pathname) {
        return this.props.navActions.setNavActive(Object.assign({}, this.state, {index}));
      }

      return false;
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.nav.index !== nextProps.nav.index) {
      this.setState({
        index: nextProps.nav.index
      });
    }
  }

  handleTabChange = (index) => {
    this.setState({
      index
    });

    this.props.navActions.setNavActive(Object.assign({}, this.state, {index}));

    if (this.state.list[index]) {
      return browserHistory.push(this.state.list[index].href);
    }

    browserHistory.push(this.state.list[0].href);
  };

  render() {
    return (
      <div className="row">
        <div className="column small-12">
          <h2>React Quiz example:</h2>
          <br/>

          <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
            {this.state.list.map((item, index) => {
              if (item.label === "Profile" && this.props.user && this.props.user.score) {
                return <Tab key={index} label={item.label + " | " + this.props.user.score} />
              }

              return <Tab key={index} label={item.label} />
            })}
          </Tabs>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    nav: state.nav,
    user: state.user,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    navActions: bindActionCreators(navActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
