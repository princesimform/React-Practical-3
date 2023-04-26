import React, { useEffect, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";
import { motion } from "framer-motion";
import TodoItem from "./TodoItem";
import { TodoItemObjectType } from "../Interface/TodoItem";

function TodoList() {
  const { todoList, updateItem } = useContext(TodoContext) as TodoContextType;
  const todoListContainer = useRef<HTMLDivElement>(null)!;
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  useEffect(() => {
    if (null != todoListContainer.current) {
      console.log(todoListContainer.current.scrollHeight);

      if (todoListContainer.current.scrollHeight > 432) {
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
    <motion.div
      variants={variants}
      className='todo-list'
      ref={todoListContainer}
      id='todo-list'
    >
      {todoList.map((todoItem: TodoItemObjectType) => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </motion.div>
  );
}

export default TodoList;
