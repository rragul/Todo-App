import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

const TaskForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (name, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { name, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.name);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, { id: uuid(), name: input, completed: false }]);
      setInput("");
    } if(editTodo) {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
        />
        <button type="submit">{editTodo ? "OK" :"+"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
