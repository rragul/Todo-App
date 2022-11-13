import TaskForm from "./TaskForm";
import Task from "./Task";
import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTask = todos.filter((todos) => todos.completed).length;
  const totalTask = todos.length;
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <h2>
        {totalTask ? `${completedTask}/${totalTask} Complete`:"" }<br />
        {completedTask === totalTask && totalTask > 0 ? "Good Job🙌" : ""}
      </h2>
      <TaskForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
      />
      <Task todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
