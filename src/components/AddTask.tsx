import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TodoItemObjectType } from "../Interface/TodoItem";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";


function AddTask() {
  const { addItem, isInvalidData } = useContext(TodoContext) as TodoContextType;
  const [isInputActive, setIsInputActive] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyUp);
    };
  }, [isInputActive]);

  function onKeyUp(e: KeyboardEvent) {
    if (e.key === "Escape" && isInputActive == true) {
      setIsInputActive(false);
    }
  }
  function submitTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      const date = new Date();
      let reqData: TodoItemObjectType = {
        id: date.getUTCMilliseconds(),
        createdAt: date.toLocaleDateString("en-US"),
        item: e.currentTarget.value,
        isCompleted: false,
      };

      try {
        addItem(reqData);
        setTodoInput("");
      } catch (error) {}
    }
  }

  return (
    <>
      {isInputActive ? (
        <div className='add-task'>
          <div className='input-box'>
            <input
              className={isInvalidData ? `invalid-data` : ``}
              type='text'
              name='todoInput'
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={submitTask}
              placeholder='Enter Your Task'
            />
            {isInvalidData ? (
              <p className='invalid-data-text'>Invalid Data</p>
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
        </div>
      ) : (
        <div className='add-task add-task-btn'>
          <div className='add-task-icon-section'>
            <span
              onClick={() => setIsInputActive(true)}
              className='add-task-icon'
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTask;
