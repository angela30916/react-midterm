import React, { useState } from "react";
import "./Memo.css";

function Memo(props) {
  const [isEditing, setEditing] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("subit");
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
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

export default Memo;
