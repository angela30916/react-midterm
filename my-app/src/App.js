import React, { useState } from "react";
import { nanoid } from "nanoid";
import Memo from "./components/Memo";
import TaskList from "./components/TaskList";
import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "task-" + nanoid(), name: name };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map((task) => (
    <TaskList id={task.id} name={task.name} key={task.id} />
  ));

  return (
    <div className="App">
      {taskList}
      <Memo addTask={addTask} />
    </div>
  );
}

export default App;
