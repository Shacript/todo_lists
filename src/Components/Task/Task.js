import "./Task.css";

const Task = ({ text, onNext, onBack, task_index }) => {
  return (
    <div className="List_child">
      <p>{text}</p>
      <div className="control">
        {onBack && (
          <button className="btn" onClick={() => onBack(task_index)}>
            {"<<"}
          </button>
        )}
        {onNext && (
          <button className="btn" onClick={() => onNext(task_index)}>
            {">>"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
