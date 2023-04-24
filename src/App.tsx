import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
interface requestData {
  id: number;
  createdAt: string;
  item: string;
  isCompleted: boolean;
}
function App() {
  const [todoList, setTodoList] = useState<Array<requestData>>();

  useEffect(() => {
    if (localStorage.getItem("todo") != null) {
      setTodoList(JSON.parse(localStorage.getItem("todo")!));
    }
  }, []);
  function addTodoItem(newTodoItem: requestData) {
    let newTodoList: requestData[] | null | undefined = [...todoList, newTodoItem];
    try {
      localStorage.setItem("todo", JSON.stringify(newTodoList));
      setTodoList(newTodoList!);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='App'>
      <Layout>
        <Header />
        <TodoList todoListItems={todoList} />
        <AddTask updateTodoList={addTodoItem} />
      </Layout>
    </div>
  );
}

export default App;
