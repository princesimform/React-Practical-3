import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TodoItemObjectType } from "../Interface/TodoItem";
const initialState: { todoList: any; isInvalidData: boolean } = {
  todoList: [],
  isInvalidData: false,
};

function sortTodo() {
  return function (a: TodoItemObjectType, b: TodoItemObjectType) {
    if (a.isCompleted) {
      return -1;
    } else {
      return 1;
    }
  };
}
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    init(state) {
      if (localStorage.getItem("todo") != null) {
        const today = new Date().toLocaleDateString("en-US");
        let TodayList = JSON.parse(localStorage.getItem("todo")!);

        TodayList = TodayList.filter(function (item: TodoItemObjectType) {
          return item.createdAt == today;
        });

        TodayList.sort(sortTodo());
        localStorage.setItem("todo", JSON.stringify(TodayList));
        state.todoList = TodayList;
      } else {
        state.todoList = [];
      }
    },
    addItem(state, action) {
      if (action.payload.item.trim() !== "") {
        state.todoList = state.todoList.concat(action.payload);
        try {
          localStorage.setItem("todo", JSON.stringify(state.todoList));
          const todoListDom = document.getElementById("todo-list");
          todoListDom?.scrollTo(0, todoListDom.scrollHeight);
        } catch (error) {
          throw new Error("Invalid");
        }
      } else {
        throw new Error("Invalid");
      }
    },
    changeValidity(state) {
      console.log(state.isInvalidData);

      state.isInvalidData = !state.isInvalidData;
    },
    updateItem(state, action) {
      const updateItemIndex = state.todoList.findIndex(
        (item: any) => item.id == action.payload
      );
      state.todoList[updateItemIndex].isCompleted =
        !state.todoList[updateItemIndex].isCompleted;
      state.todoList.sort(sortTodo());
      localStorage.setItem("todo", JSON.stringify(state.todoList));
      const todoListDom = document.getElementById("todo-list");
      todoListDom?.scrollTo(todoListDom.scrollHeight, 0);
    },
    deleteItem(state, action) {
      const updateItemIndex = state.todoList.findIndex(
        (item: any) => item.id == action.payload
      );
      state.todoList.splice(updateItemIndex, 1);
      state.todoList.sort(sortTodo());
      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },
  },
});

const store = configureStore({ reducer: { todoList: todoSlice.reducer } });

export const todoActions = todoSlice.actions;
export default store;
