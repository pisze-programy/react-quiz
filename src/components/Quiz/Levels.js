import React, {PropTypes} from "react";

export default function Levels({levels, loadQuestions}) {
  return (
    <div className="row">
      {levels.map(level => {
        return (
          <div className="small-3 column" key={level.id}>
            <button
              type="button"
              className="button expanded"
              disabled={!level.unlocked}
              onClick={() => loadQuestions(level.id)}>
              Level: {level.id}
            </button>
          </div>
        )
      })}
    </div>
  );
}

Levels.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  levels: PropTypes.array.isRequired,
};
