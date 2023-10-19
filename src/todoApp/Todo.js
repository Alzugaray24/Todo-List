import { useState } from "react";


export default function Todo({ item, onUpdate, onDelete }) {
  function TodoNewForm() {
    const [newValue, setNewValue] = useState(item.title);

    const handleChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      onUpdate(item.id, newValue);
    };

    const handleSubmit = () => {};

    return (
      <form className="TodoElement" onClick={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={newValue}
          className="form-control"
        />
        <input
          className="btn btn-info todo-button"
          type="submit"
          onClick={handleClickUpdateTodo}
          value={"Update"}
        />
      </form>
    );
  }

  function TodoInfo() {
    const [editable, setEditable] = useState(false);

    const handleEdit = (e) => {
      e.preventDefault();
      setEditable(true);
    };

    return (
      <div className="todo-info">
        <div key={item.id}>
          {editable ? (
            <TodoNewForm /> // Renderiza TodoElement si editable es verdadero
          ) : (
            <div className="todo-form">
              {item.title}
              <div>
              <button className="btn btn-success" onClick={handleEdit}>
                Edit
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={(e) => onDelete(item.id)}
              >
                Delete
              </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <TodoInfo />;
}
