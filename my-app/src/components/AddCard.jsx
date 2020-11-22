import React, { useState } from "react";
import "./AddCard.css";

function AddCard(props) {
  const [name, setName] = useState("");

  const [isEditing, setEditing] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      props.addCard(name);
      setName("");
    }
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Card title..."
        value={name}
        onChange={handleChange}
      />
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
    <div className="newCard">{isEditing ? editingTemplate : viewTemplate}</div>
  );
}

export default AddCard;
