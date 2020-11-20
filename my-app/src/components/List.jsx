import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddCard from "./AddCard";
import Card from "./Card";
import "./List.css";

function List(props) {
  const [cards, setCards] = useState(props.cards);

  function addCard(name) {
    const newCard = { id: "card-" + nanoid(), name: name };
    setCards([...cards, newCard]);
  }

  const cardList = cards.map((card) => (
    <Card id={card.id} name={card.name} key={card.id} />
  ));

  return (
    <div className="task" id={props.id}>
      {props.name}
      {cardList}
      <AddCard addCard={addCard} />
    </div>
  );
}

export default List;
