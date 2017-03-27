import React, {PropTypes} from "react";

export default function QuestionCounter({current, total}) {
  return (
    <div className="question-counter">
      <br/>

      Current question:
      <br/>

      <p>{current} / {total}</p>

      <br/>
    </div>
  );
}

QuestionCounter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
