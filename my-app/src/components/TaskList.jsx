import React, { useState } from "react";
import "./TaskList.css";

function TaskList(props) {
  const [name, setName] = useState("");

  const [isEditing, setEditing] = useState(false);

  function handleChange(e) {
    // setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (name) {
    //     props.addTask(name)
    //     setName('')
    // }
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <br />
      <br />
      <button type="submit">
        <span>Add card</span>
      </button>
      <button type="button" onClick={() => setEditing(false)}>
        <span>X</span>
      </button>
    </form>
  );

  const viewTemplate = (
    <button type="button" onClick={() => setEditing(true)}>
      <span>＋ Add a card</span>
    </button>
  );

  return (
    <div className="task" id={props.id}>
      {props.name}
      <div className="card">{isEditing ? editingTemplate : viewTemplate}</div>
    </div>
  );
}

export default TaskList;
