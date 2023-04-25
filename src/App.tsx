import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import TodoProvider from "./context/TodoContext";
function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <div className='todo-app-container'>
          <Header />
          <TodoList />
          <AddTask />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
