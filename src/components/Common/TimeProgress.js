import React, {PropTypes} from "react";
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default function TimeProgress({time, value}) {
  return (
    <div>
      <br/>
      <ProgressBar type="linear" mode="determinate" value={value} />

      Time left: {time} ms
      <br/>
    </div>
  );
}

TimeProgress.propTypes = {
  time: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
