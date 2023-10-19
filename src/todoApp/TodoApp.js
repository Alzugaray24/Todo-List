import { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import '../todoApp/TodoApp.css'

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title: title,
    };

    const temp = [...todo];

    temp.unshift(newTodo);

    setTodo(temp);
  };

  const handleUpdate = (id, value) => {
    const temp = [...todo];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodo(temp);
  };

  const handleDelete = (id) => {
    const temp = todo.filter((item) => item.id !== id);
    setTodo(temp);
  };

  return (
    <div className="TodoApp">
      <form className="todo-form">
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            className="todo-text form-control"
            type="text"
            value={title}
          />
          <div className="input-group-append">
            <input
              className="btn btn-primary"
              type="submit"
              value="Create Todo"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
      <div className="todo-container">
        <div>
          {todo.map((item) => {
            return (
              <Todo
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
