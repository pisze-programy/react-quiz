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

    this.counting = null;

    this.stopCounting = this.stopCounting.bind(this);
    this.runCounter = this.runCounter.bind(this);
  }

  runCounter () {
    this.counting = setInterval(() => {
      this.setState({seconds: this.state.seconds - this.state.buffer});
      this.setState({value: Math.round((this.state.seconds / this.props.time) * 100)});

      if (this.state.seconds <= 0) {
        this.stopCounting();
      }

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
    this.runCounter();
  }

  componentWillUnmount() {
    this.stopCounting();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.time !== this.props.time || prevProps.score !== this.props.score) {
      this.setState({
        seconds: this.props.time,
        value: 100
      });

      this.runCounter();
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
