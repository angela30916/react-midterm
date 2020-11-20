import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddList from "./components/AddList";
import List from "./components/List";
import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    const newTask = { id: "task-" + nanoid(), name: name };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map((task) => (
    <List id={task.id} name={task.name} key={task.id} />
  ));

  return (
    <div className="App">
      {taskList}
      <AddList addTask={addTask} />
    </div>
  );
}

export default App;
