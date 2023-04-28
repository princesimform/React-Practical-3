import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TodoItemObjectType } from "../Interface/TodoItem";
const initialState = { todoList: [], isInvalidData: false };

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
  name: "todd",
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
      console.log(action.payload);

      if (action.payload.item.trim() == "") {
        state.isInvalidData = true;
        setTimeout(() => {
          state.isInvalidData = false;
        }, 2000);
      } else {
        state.todoList = state.todoList.concat(action.payload);
        try {
          localStorage.setItem("todo", JSON.stringify(state.todoList));
          const todoListDom = document.getElementById("todo-list");
          todoListDom?.scrollTo(0, todoListDom.scrollHeight);
        } catch (error) {
          state.isInvalidData = true;
          setTimeout(() => {
            state.isInvalidData = false;
          }, 2000);
        }
      }
    },
  },
});

const store = configureStore({ reducer: { todoList: todoSlice.reducer } });

export const todoActions = todoSlice.actions;
export default store;
