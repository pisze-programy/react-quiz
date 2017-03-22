import React, {PropTypes} from "react";

export default function Score({points}) {
  return (
    <div>
      You can achieve {points} points
    </div>
  );
}

Score.propTypes = {
  points: PropTypes.number.isRequired,
};
