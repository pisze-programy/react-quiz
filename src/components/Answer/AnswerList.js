import React, {PropTypes} from "react";

export default function AnswersList({answers}) {
  return (
    <div className="answers-list-summary">
      <div className="spacer s2" />

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Question:</th>
            <th>Answer Time:</th>
            <th>Max Points:</th>
            <th>Your Score:</th>
          </tr>
        </thead>
        <tbody>
        {answers.map((answer, index) => {
          return (
            <tr key={index}>
              <th className={answer.status ? "good-answer" : "bad-answer"}>{answer.status ? "good" : "bad"}</th>
              <th>{answer.question.title}</th>
              <th>{answer.time / 1000} s</th>
              <th>{answer.question.score}</th>
              <th>{answer.status ? answer.points : 0}</th>
            </tr>
          )
        })}
        </tbody>
      </table>

      <div className="spacer s2" />
    </div>
  );
}

AnswersList.propTypes = {
  answers: PropTypes.array.isRequired,
};
