import React, {Component} from "react";
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import {browserHistory} from 'react-router';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      fixedIndex: 0,
      list: [
        {label: 'Quiz', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Leaderboard', href: '/leaderboard'},
      ]
    };
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this);
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});

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

        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          {this.state.list.map((item, index) => {
            return <Tab key={index} label={item.label} />
          })}
        </Tabs>
      </div>
    )
  }
}
