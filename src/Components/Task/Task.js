import { useState } from "react";

import "./Task.css";

const Task = ({ text, onNext, onBack, task_index, onChange, onRemove }) => {
  task_index = Number(task_index);

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="List_child">
      {!editMode ? (
        <p>{editText}</p>
      ) : (
        <input
          type="text"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
            onChange(task_index, editText);
          }}
        />
      )}
      <div className="control">
        <button className="btn" onClick={() => setEditMode(!editMode)}>
          {"E"}
        </button>
        {onBack && (
          <button className="btn" onClick={() => onBack(task_index)}>
            {"<"}
          </button>
        )}
        {onNext && (
          <button className="btn" onClick={() => onNext(task_index)}>
            {">"}
          </button>
        )}
        <button className="btn" onClick={() => onRemove(task_index)}>
          {"X"}
        </button>
      </div>
    </div>
  );
};

export default Task;
