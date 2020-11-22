import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddCard from "./AddCard";
import "./List.css";

function List(props) {
  const [cards, setCards] = useState([]);

  function addCard(name) {
    setCards([...cards, name]);
  }

  function reorder(source, startIndex, endIndex) {
    const result = Array.from(source);
    const [remove] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, remove);

    return result;
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newCards = reorder(
      cards,
      result.source.index,
      result.destination.index
    );

    setCards(newCards);
  };

  const [newName, setNewName] = useState("");

  const [isEditing, setEditing] = useState(false);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newName) {
      props.editTask(props.id, newName);
      setNewName("");
    }
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.name}
        id={props.id}
        value={newName}
        onChange={handleChange}
      />
      <button type="submit">
        <span>Save</span>
      </button>
      <button type="button" onClick={() => setEditing(false)}>
        <span>Cancel</span>
      </button>
    </form>
  );

  const viewTemplate = (
    <div className="row">
      <div className="title" onClick={() => setEditing(true)}>
        {props.name}
      </div>
      <button
        type="button"
        className="btnDanger"
        onClick={() => props.deleteTask(props.id)}
      >
        X
      </button>
    </div>
  );

  return (
    <div className="task" id={props.id}>
      {isEditing ? editingTemplate : viewTemplate}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="id">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <Draggable draggableId={index.toString()} index={index}>
                  {(p) => (
                    <div
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      className="card"
                    >
                      {card}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddCard addCard={addCard} />
    </div>
  );
}

export default List;
