import React, {PropTypes} from 'react';

export default function Question({content}) {
  return (
    <div className="question-content">
      <h2>{content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
};
