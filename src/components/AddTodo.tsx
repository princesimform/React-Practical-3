import React, { useState, useEffect, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TodoItemObjectType } from "../Interface/TodoItem";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../Interface/TodoContextType";

function AddTodo() {
  const { addItem, isInvalidData } = useContext(TodoContext) as TodoContextType;
  const InputField = useRef<HTMLInputElement>(null)!;
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
  function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const date = new Date();
    let reqData: TodoItemObjectType = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      createdAt: date.toLocaleDateString("en-US"),
      item: todoInput,
      isCompleted: false,
    };
    try {
      addItem(reqData);
      setTodoInput("");
    } catch (error) {}
    e.preventDefault();
  }

  const activeInput = () => {
    setIsInputActive(true);
    setTodoInput("");
    if (InputField.current != null) {
      InputField.current.focus();
    }
  };
  return (
    <>
      {isInputActive ? (
        <div className='add-task'>
          <form className='input-box' onSubmit={HandleSubmit}>
            <input
              className={isInvalidData ? `invalid-data` : ``}
              type='text'
              name='todoInput'
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder='Enter Your Task'
              ref={InputField}
            />
            {isInvalidData ? (
              <p className='invalid-data-text'>Invalid Data</p>
            ) : (
              <p>&nbsp;</p>
            )}
          </form>
        </div>
      ) : (
        <div className='add-task add-task-btn'>
          <div className='add-task-icon-section'>
            <span onClick={activeInput} className='add-task-icon'>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodo;
