import React, { useState } from "react";
import "./AddList.css";

function AddList(props) {
  const [name, setName] = useState("");

  const [isEditing, setEditing] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      props.addTask(name);
      setName("");
    }
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <br />
      <button type="submit">
        <span>Add list</span>
      </button>
      <button type="button" onClick={() => setEditing(false)}>
        <span>X</span>
      </button>
    </form>
  );

  const viewTemplate = (
    <button type="button" onClick={() => setEditing(true)}>
      <span>＋ Add a list</span>
    </button>
  );

  return (
    <div className="memo">{isEditing ? editingTemplate : viewTemplate}</div>
  );
}

export default AddList;
