import React, {PropTypes} from "react";

export default function TimeProgress({percent}) {
  return (
    <div className="progress-wrapper">
      <span data-percent={percent} className="progress-bar" />
    </div>
  );
}

TimeProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};
