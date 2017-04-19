import React, {PropTypes} from "react";

export default function QuestionCounter({current, total}) {
  return (
    <span>{current} / {total}</span>
  );
}

QuestionCounter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
