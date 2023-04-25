// Class Component
import React, { Component } from "react";
import { TodoItemProps } from "../Interface/TodoItemProps";

function TodoItem({ isCompleted, id, data, updateItem }: TodoItemProps) {
  return (
    <div className={"item" + `${isCompleted ? " item-completed" : ""}`}>
      <div className='todo-name'>
        <p>{data}</p>
      </div>
      <div className='item-complete' onClick={() => updateItem(id)}>
        <span className='item-complete-btn'></span>
      </div>
    </div>
  );
}

export default TodoItem;
