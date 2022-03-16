import { useState } from "react";

import "./App.css";

import TaskLists from "./Components/TaskLists/TaskLists";

import TaskFormDialog from "./Components/TaskFormDialog/TaskFormDialog";

function App() {
  const defaultState = ["Task 1", "Task 2", "Task 3"];

  const [dialogVisible, setDialogVisible] = useState(false);
  const [toDoLists, setToDoLists] = useState(defaultState);
  const [doingLists, setDoingLists] = useState(defaultState);
  const [doneLists, setDoneLists] = useState(defaultState);

  const onToDoListChange = (task_index, task_text) => {
    setToDoLists((prev) => {
      prev[task_index] = task_text;
      return prev;
    });
  };

  const onDoingListsChange = (task_index, task_text) => {
    setDoingLists((prev) => {
      prev[task_index] = task_text;
      return prev;
    });
  };

  const onDoneListsChange = (task_index, task_text) => {
    setDoneLists((prev) => {
      prev[task_index] = task_text;
      return prev;
    });
  };

  const onToDoListRemove = (task_index) => {
    setToDoLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const onDoingListsRemove = (task_index) => {
    setDoingLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const onDoneListsRemove = (task_index) => {
    setDoneLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const nextToDoLists = (task_index) => {
    setDoingLists((prev) => [...prev, toDoLists[task_index]]);
    setToDoLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const nextDoingLists = (task_index) => {
    setDoneLists((prev) => [...prev, doingLists[task_index]]);
    setDoingLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const backDoingLists = (task_index) => {
    setToDoLists((prev) => [...prev, doingLists[task_index]]);
    setDoingLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const backDoneLists = (task_index) => {
    setDoingLists((prev) => [...prev, doneLists[task_index]]);
    setDoneLists((prev) => prev.filter((v, index) => index !== task_index));
  };

  const onCloseDialog = () => {
    setDialogVisible(false);
  };

  const onAdd = (task_text) => {
    setToDoLists((prev) => [...prev, task_text]);
  };

  return (
    <div className="App">
      {dialogVisible ? (
        <TaskFormDialog onCloseDialog={onCloseDialog} onAdd={onAdd} />
      ) : (
        <button className="btn-top-left" onClick={() => setDialogVisible(true)}>
          +
        </button>
      )}
      <main>
        <TaskLists
          title="ToDo"
          TaskLists={toDoLists}
          onNext={nextToDoLists}
          onChange={onToDoListChange}
          onRemove={onToDoListRemove}
        />
        <TaskLists
          title="Doing"
          TaskLists={doingLists}
          onNext={nextDoingLists}
          onBack={backDoingLists}
          onChange={onDoingListsChange}
          onRemove={onDoingListsRemove}
        />
        <TaskLists
          title="Done"
          TaskLists={doneLists}
          onBack={backDoneLists}
          onChange={onDoneListsChange}
          onRemove={onDoneListsRemove}
        />
      </main>
    </div>
  );
}

export default App;
