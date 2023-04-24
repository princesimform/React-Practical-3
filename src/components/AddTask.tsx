import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface requestData {
  id: number;
  createdAt: string;
  item: string;
  isCompleted: boolean;
}
function AddTask({ updateTodoList }: any) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [listData, setListData] = useState<Array<requestData>>([]);
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
    const date = new Date();
    let reqData: requestData = {
      id: date.getUTCMilliseconds(),
      createdAt: date.toLocaleDateString("en-US"),
      item: e.currentTarget.value,
      isCompleted: false,
    };

    if (e.key == "Enter") {
      console.log(reqData);
      updateTodoList(reqData);
    }
  }

  return (
    <div className='add-task'>
      {isInputActive ? (
        <div className='input-box'>
          <input
            type='text'
            name='todoInput'
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyDown={submitTask}
            placeholder='Enter Your Task'
          />
        </div>
      ) : (
        <div className='add-task-icon-section'>
          <span
            onClick={() => setIsInputActive(true)}
            className='add-task-icon'
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      )}
    </div>
  );
}

export default AddTask;
