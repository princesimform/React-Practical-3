export interface TodoItemProps {
  isCompleted: boolean;
  data: string;
  id: number;
  updateItem: (id: number) => void;
  deleteItem: (id: number) => void;
}
