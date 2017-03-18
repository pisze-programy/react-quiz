import React, {PropTypes} from 'react';

export default function Question({contnet}) {
  return (
    <div className="question-content">
      <h2>{contnet}</h2>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
};
