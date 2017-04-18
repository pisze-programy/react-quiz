import React, {PropTypes} from "react";

export default function Levels({levels, loadQuestions}) {
  return (
    <div>
      {levels.map(level => {
        return (
          <div key={level.id}>
            <button
              type="button"
              className="button primary"
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
