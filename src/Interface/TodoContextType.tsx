import { TodoitemObjectType } from "./TodoItem";
export type TodoContextType = {
  todoList: TodoitemObjectType[];
  addItem: (newTodoItem: TodoitemObjectType) => void;
  updateItem: (id: number) => void;
  isInvalidData: boolean;
};
