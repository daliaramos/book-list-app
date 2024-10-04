import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
