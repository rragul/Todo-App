import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Task = ({ todos, setTodos, setEditTodo }) => {
  const deleteTask = ({ id }) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const onChangeHandler = ({ id }) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editTask = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <div className="task" key={todo.id}>
          <input
            type="checkbox"
            key={todo.id}
            onChange={() => onChangeHandler(todo)}
            checked={todo.completed}
          />
          <p className={`${todo.completed ? "completed" : ""}`}>{todo.name}</p>
          <FiEdit className="editTask" onClick={() => editTask(todo)} />
          <AiFillDelete
            className="deleteTask"
            onClick={() => deleteTask(todo)}
          />
        </div>
      ))}
    </div>
  );
};

export default Task;
