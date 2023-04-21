import React, { useState } from "react";
import TodoListdata from "../data/TodoListdata";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todoListdata, setTodoListdata] = useState(TodoListdata);
  return (
    <div className='todo-list'>
      {todoListdata.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            data={item.data}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
