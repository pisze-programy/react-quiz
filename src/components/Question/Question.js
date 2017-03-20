import React, {PropTypes} from "react";

export default function Question({question}) {
  return (
    <div className="question-content">
      <h2>{question.title}</h2>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
};
