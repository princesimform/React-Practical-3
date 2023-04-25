import { TodoItemObjectType } from "./TodoItem";
export type TodoContextType = {
  todoList: TodoItemObjectType[];
  addItem: (newTodoItem: TodoItemObjectType) => void;
  updateItem: (id: number) => void;
  isInvalidData: boolean;
};
