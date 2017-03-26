import React, {PropTypes} from "react";

export default function AnswerStatus({answer, closeAction}) {
  function onCloseClick () {
    return closeAction();
  }

  if (!Object.keys(answer)) {
    return <div className="no-answer-yet" />;
  }

  if (!answer.current) {
    return <div className="status-empty" />;
  }

  return (
    <div>
      {answer.current.status ? <p>CONGRATULATION, CORRECT</p> : <p>SORRY, INCORRECT</p>}


      <a className="close" onClick={onCloseClick}>Close</a>
    </div>
  );
}

AnswerStatus.propTypes = {
  answer: PropTypes.object.isRequired,
  closeAction: PropTypes.func.isRequired,
};
