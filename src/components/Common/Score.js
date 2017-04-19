import React, {PropTypes} from "react";

export default function Score({points}) {
  return (
    <span>{points}</span>
  )
}

Score.propTypes = {
  points: PropTypes.number.isRequired,
};
