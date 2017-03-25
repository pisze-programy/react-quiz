import React, {PropTypes} from "react";

export default function AnswerStatus({answer, closeAction}) {
  function onCloseClick () {
    return closeAction();
  }

  console.log(answer);

  if (!Object.keys(answer).length) {
    return <div className="status" />;
  }

  return (
    <div>
      {answer.status ? <p>CONGRATULATION, CORRECT</p> : <p>SORRY, INCORRECT</p>}


      <a className="close" onClick={onCloseClick}>Close</a>
    </div>
  );
}

AnswerStatus.propTypes = {
  answer: PropTypes.object.isRequired,
  closeAction: PropTypes.func.isRequired,
};
