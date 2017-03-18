import React, {PropTypes} from 'react';

export default function QuestionCounter({current, total}) {
  return (
    <div className="question-counter">
      <p>{current} / {total}</p>
    </div>
  );
}

QuestionCounter.propTypes = {
  current: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
