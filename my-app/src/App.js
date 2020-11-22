import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddList from "./components/AddList";
import List from "./components/List";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    const newTask = { id: "task-" + nanoid(), name: name };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map((task) => (
    <List
      id={task.id}
      name={task.name}
      key={task.id}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="App">
      {taskList}
      <AddList addTask={addTask} />
    </div>
  );
}

export default App;
