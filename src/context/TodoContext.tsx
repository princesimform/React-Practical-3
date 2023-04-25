import React, { useState, ReactNode, useEffect } from "react";
import { TodoItemObjectType } from "./../Interface/TodoItem";
import { ChildrenNode } from "../Interface/ChildrenNode";
import { TodoContextType } from "../Interface/TodoContextType";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: ChildrenNode) => {
  const [todoList, setTodoList] = useState<Array<TodoItemObjectType>>([]);
  const [isInvalidData, setIsInvalidData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todo") != null) {
      const today = new Date().toLocaleDateString("en-US");
      console.log(today);
      const TodayList = JSON.parse(localStorage.getItem("todo")!);
      TodayList.filter((item: any) => item.date == today).sort(sortTodo());
      setTodoList(TodayList);
      localStorage.setItem("todo", JSON.stringify(TodayList));
    } else {
      setTodoList([]);
    }
  }, []);

  function sortTodo() {
    return function (a: any, b: any) {
      if (a.isCompleted) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  const addItem = (newTodoItem: TodoItemObjectType) => {
    if (newTodoItem.item.trim() == "") {
      setIsInvalidData(true);
      setTimeout(() => setIsInvalidData(false), 2000);
    } else {
      let newTodoList: TodoItemObjectType[] = [...todoList, newTodoItem];
      try {
        localStorage.setItem("todo", JSON.stringify(newTodoList));
        setTodoList(newTodoList!);
      } catch (error) {
        setIsInvalidData(true);
        setTimeout(() => setIsInvalidData(false), 2000);
      }
    }
  };
  const updateItem = (id: number) => {
    const tempList = todoList;
    const updateItemIndex = tempList.findIndex((item) => item.id == id);
    tempList[updateItemIndex].isCompleted =
      !tempList[updateItemIndex].isCompleted;
    tempList.sort(sortTodo());
    localStorage.setItem("todo", JSON.stringify(tempList));
    setTodoList([...tempList]);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addItem, updateItem, isInvalidData }}
    >
      {children}
    </TodoContext.Provider>
  );
};
// function TodoContext() {
//   return <div>TodoContext</div>;
// }

export default TodoProvider;
