import React, {Component, PropTypes} from "react";
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default class TimeProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buffer: 100,
      seconds: this.props.time,
      value: 100,
      stopEvent: this.props.stopEvent,
      counter: null,
    };

    this.stopCounting = this.stopCounting.bind(this);
    this.runCounter = this.runCounter.bind(this);
  }

  runCounter () {
    this.counting = setInterval(() => {
      if (this.state.seconds - this.state.buffer <= 0) {
        this.stopCounting();
      }

      this.setState({seconds: this.state.seconds - this.state.buffer});
      this.setState({value: Math.round((this.state.seconds / this.props.time) * 100)});

    }, this.state.buffer);
  }

  stopCounting() {
    clearInterval(this.counting);

    this.counting = null;

    if (this.props.endCallback) {
      this.props.endCallback();
    }
  }

  componentWillMount() {
    this.counting = null;

    this.runCounter();
  }

  componentWillUnmount() {
    this.stopCounting();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.stopEvent !== nextProps.stopEvent) {
      if (nextProps.stopEvent) {
        this.stopCounting();
      }

      if (!nextProps.stopEvent) {
        this.setState({
          value: 100,
          seconds: nextProps.time,
        });

        this.runCounter();
      }
    }
  }

  render() {
    return (
      <div>
        <br/>
        {this.state.props}
        <ProgressBar type="linear" mode="determinate" value={this.state.value} buffer={this.state.value - this.state.buffer} />
        {this.state.seconds}
        <br/>
      </div>
    );
  }
}

TimeProgress.propTypes = {
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  stopEvent: PropTypes.bool,
  endCallback: PropTypes.func,
};
