import "./TaskLists.css";

import Task from "../Task/Task";

const TaskLists = ({ title, TaskLists, onNext, onBack }) => {
  return (
    <div className="TaskLists">
      <h1>{title}</h1>
      <div className="List_parent">
        {TaskLists &&
          TaskLists.map((value, index) => (
            <Task
              key={index}
              task_index={index}
              text={value}
              onBack={onBack}
              onNext={onNext}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskLists;
