import React, { useEffect, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList, updateItem } = useContext(TodoContext) as TodoContextType;

  const todoListContainer = useRef<HTMLDivElement>(null)!;
  useEffect(() => {
    if (null != todoListContainer.current) {
      if (todoListContainer.current.clientHeight >= 400) {
        todoListContainer.current.classList.value =
          "todo-list todo-list-overflow";
      } else {
        todoListContainer.current.classList.value = "todo-list";
      }
    }
  }, [todoList]);

  if (!todoList || todoList.length === 0) {
    return <span className='all-task-completed'></span>;
  }

  return (
    <div className='todo-list' ref={todoListContainer}>
      {todoList.map((item: any) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            data={item.item}
            isCompleted={item.isCompleted}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
