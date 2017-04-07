import React, {Component} from "react";
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import {browserHistory} from 'react-router';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      list: [
        {label: 'Quiz', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Leaderboard', href: '/leaderboard'},
      ]
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange = (index) => {
    this.setState({index: index});

    if (this.state.list[index]) {
      return browserHistory.push(this.state.list[index].href);
    }

    browserHistory.push(this.state.list[0].href);
  };

  render() {

    return (
      <div>
        <h2>React Quiz example:</h2>
        <br/>

        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          {this.state.list.map((item, index) => {
            return <Tab key={index} label={item.label} />
          })}
        </Tabs>
      </div>
    )
  }
}
