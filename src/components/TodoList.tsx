import React, { useEffect, useRef, useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoListItems }: any) {
  const todoListContainer = useRef<HTMLDivElement>(null)!;
  useEffect(() => {
    if (null != todoListContainer.current) {
      if (todoListContainer.current.clientHeight >= 448) {
        todoListContainer.current.classList.value =
          "todo-list todo-list-overflow";
      } else {
        todoListContainer.current.classList.value = "todo-list";
      }
    }
  }, []);

  if (!todoListItems || todoListItems.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='todo-list' ref={todoListContainer}>
      {todoListItems.map((item: any) => {
        console.log(item);
        
        return (
          <TodoListItem
            key={item.id}
            data={item.item}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
