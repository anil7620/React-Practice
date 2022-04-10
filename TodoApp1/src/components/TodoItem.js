import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h3>{todo.Name}</h3>
      <p>{todo.Desc}</p>
      <button
        className="btn btn-sm btn-danger "
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
