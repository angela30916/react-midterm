import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      {props.name}
    </div>
  );
}

export default Card;
