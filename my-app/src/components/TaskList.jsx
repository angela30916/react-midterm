import React, { useState } from "react";
import "./TaskList.css";

function TaskList(props) {
  return (
    <div className="task" id={props.id}>
      {props.name}
    </div>
  );
}

export default TaskList;
