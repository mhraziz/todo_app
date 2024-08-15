import { useState } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import "../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodo = (id, title, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <main className="main">
      <div className="bg"></div>
      <h1>
        React Todo <span>StreamLine your Day, the react Way!</span>
      </h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </main>
  );
};

export default App;
