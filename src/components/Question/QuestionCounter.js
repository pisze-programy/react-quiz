import React, {PropTypes} from "react";

export default function QuestionCounter({current, total}) {
  return (
    <div className="question-counter">
      Current question:
      <p>{current} / {total}</p>
    </div>
  );
}

QuestionCounter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
