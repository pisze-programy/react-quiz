import React, {PropTypes} from 'react';

export default function Answer({answer}) {
  return (
    <div className="answer">
      <input
        type="radio"
        id={answer.type}
        value={answer.type}
        className="input"
        name="radioGroup"/>
      <label className="label" htmlFor={answer.type}>
        {answer.content}
      </label>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};
