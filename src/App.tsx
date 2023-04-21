import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header />
        <TodoList />
        <AddTask />
      </Layout>
    </div>
  );
}

export default App;
