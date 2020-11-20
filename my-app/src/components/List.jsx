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

  return (
    <div className="task" id={props.id}>
      {props.name}
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
