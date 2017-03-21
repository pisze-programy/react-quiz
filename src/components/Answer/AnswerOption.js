import React, {PropTypes} from "react";

export default function AnswerOption({id, type, content, onClickHandle}) {
  function onAnswerClick () {
    return onClickHandle({
      answerId: id
    });
  }

  return (
    <div className="answer">
      <input
        type="radio"
        id={type}
        value={type}
        className="input"
        name="radioGroup"/>
      <label className="label" htmlFor={type} onClick={onAnswerClick}>
        {content}
      </label>
    </div>
  );
}

AnswerOption.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
