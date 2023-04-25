// Class Component
import React, { Component } from "react";
import { TodoItemProps } from "../Interface/TodoItemProps";
import { motion } from "framer-motion";

function TodoItem({ isCompleted, id, data, updateItem }: TodoItemProps) {
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
          <span className='item-complete-btn'></span>
        </motion.div>
      </motion.div>
    </>
  );
}

export default TodoItem;
