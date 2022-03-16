import { useState, useEffect } from "react";
import "./TaskFormDialog.css";

const TaskFormDialog = ({ onCloseDialog, onAdd }) => {
  const [taskText, setTaskText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(taskText);
    setTaskText("");
  };

  useEffect(() => {
    const keyListener = document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        onCloseDialog();
      }
    });

    return () => {
      document.removeEventListener("keyup", keyListener);
    };
  }, [onCloseDialog]);

  return (
    <div className="dialogBackground" onClick={onCloseDialog}>
      <form
        onSubmit={onSubmit}
        className="form-container"
        onClick={(e) => e.stopPropagation()}
      >
        <label for="taskText">ToDo Task : </label>
        <input
          id="taskText"
          type="text"
          placeholder="Enter your task here."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <button className="btn">Add</button>
        <button className="btn" onClick={() => setTaskText("")}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default TaskFormDialog;
