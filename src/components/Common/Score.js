import React, {PropTypes} from "react";

export default function Score({points}) {
  return (
    <div>
      {points}
    </div>
  );
}

Score.propTypes = {
  points: PropTypes.number.isRequired,
};
