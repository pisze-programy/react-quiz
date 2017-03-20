import React, {PropTypes} from "react";

export default function AnswerOption({type, content}) {
  return (
    <div className="answer">
      <input
        type="radio"
        id={type}
        value={type}
        className="input"
        name="radioGroup"/>
      <label className="label" htmlFor={type}>
        {content}
      </label>
    </div>
  );
}

AnswerOption.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
