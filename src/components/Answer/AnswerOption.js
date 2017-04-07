import React, {PropTypes} from "react";
import {List, ListItem} from "react-toolbox/lib/list";

export default function AnswerOption({id, type, content, onClickHandle}) {
  function onAnswerClick () {
    return onClickHandle({
      id
    });
  }

  return (
    <div className="answer">
      <List selectable ripple>
        <ListItem
          onClick={onAnswerClick}
          avatar={`https://placeimg.com/100/100/animals/sepia?${id}`}
          caption={`${content}`}
        />
      </List>
    </div>
  );
}

AnswerOption.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
