import React, { useEffect, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";
import { motion } from "framer-motion";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList, updateItem, deleteItem } = useContext(
    TodoContext
  ) as TodoContextType;

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
      console.log(todoListContainer.current.clientHeight);

      if (todoListContainer.current.clientHeight > 432) {
        todoListContainer.current.classList.value =
          "todo-list todo-list-overflow";
      } else {
        todoListContainer.current.classList.value = "todo-list";
      }
    }
    if (todoListContainer.current != null) {
      todoListContainer.current.scrollTo(
        0,
        todoListContainer.current.scrollHeight
      );
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
    >
      {todoList.map((item: any) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            data={item.item}
            isCompleted={item.isCompleted}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </motion.div>
  );
}

export default TodoList;
