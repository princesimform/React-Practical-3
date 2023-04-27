// Class Component
import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";
import { TodoItemObjectType } from "../Interface/TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft , faTrash} from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todoItem }: { todoItem: TodoItemObjectType }) {
  const todoItemContainer = useRef<HTMLDivElement>(null)!;
  const { updateItem, deleteItem } = useContext(TodoContext) as TodoContextType;
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        id={todoItem.id}
        variants={variants}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
        className={"item" + `${todoItem.isCompleted ? " item-completed" : ""}`}
        ref={todoItemContainer}
      >
        <div className='todo-name'>
          <p
            data-tooltip-content={todoItem.item}
            data-tooltip-id='tooltip-data'
          >
            {todoItem.item}
          </p>
        </div>
        <motion.div
          className='item-complete'
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <span
            className='item-complete-btn'
            onClick={() => {
              updateItem(todoItem.id);
            }}
          ></span>

          {todoItem.isCompleted && (
            <span
              className='delete-item'
              onClick={() => {
                deleteItem(todoItem.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          )}
          
        </motion.div>
      </motion.div>

      <Tooltip id='tooltip-data' />
    </>
  );
}

export default TodoItem;
