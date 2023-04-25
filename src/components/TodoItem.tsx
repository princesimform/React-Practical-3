// Class Component
import React, { Component, useEffect, useRef } from "react";
import { TodoItemProps } from "../Interface/TodoItemProps";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
function TodoItem({
  isCompleted,
  id,
  data,
  updateItem,
  deleteItem,
}: TodoItemProps) {
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
        variants={variants}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
        className={"item" + `${isCompleted ? " item-completed" : ""}`}
        onClick={() => updateItem(id)}
        data-tooltip-content='Hello world!'
      >
        <div className='todo-name'>
          <p>
            <abbr title={data}>{data}</abbr>
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
            data-tooltip-content={isCompleted ? "Right Click To Delete Task" : ""}
            data-tooltip-id={isCompleted ? "tooltip-completed" : ""}
            onContextMenu={() => {
              isCompleted && deleteItem(id);
            }}
          ></span>
        </motion.div>
      </motion.div>

      <Tooltip id='tooltip-completed' />
    </>
  );
}

export default TodoItem;
