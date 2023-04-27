import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoProvider from "./context/TodoContext";
function App() {
  return (
    <div className='App'>
          <Header />
      <TodoProvider>
        <div className='todo-app-container'>
          <TodoList />
          <AddTodo />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
