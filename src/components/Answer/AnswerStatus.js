import React, {Component, PropTypes} from "react";
import Dialog from 'react-toolbox/lib/dialog/Dialog';

export default class AnswerStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      actions: [
        { label: 'Close', onClick: this.onCloseClick }
      ]
    };

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onCloseClick () {
    return this.props.closeAction();
  }

  render () {
    if (!Object.keys(this.props.answer)) {
      return <div className="no-answer-yet" />;
    }

    if (!this.props.answer.current) {
      return <div className="status-empty" />;
    }

    const status = this.props.answer.current.status ? 'CONGRATULATION, CORRECT' : 'UPS, INCORRECT';

    return (
      <div>
        <Dialog
          actions={this.state.actions}
          active={this.state.active}
          onEscKeyDown={this.onCloseClick}
          onOverlayClick={this.onCloseClick}
          title={status}>

          <img alt={status} src='https://placeimg.com/640/480/tech?123' />
        </Dialog>
      </div>
    );
  }
}

AnswerStatus.propTypes = {
  answer: PropTypes.object.isRequired,
  closeAction: PropTypes.func.isRequired,
};
