import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minnHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="text-center alert-success my-3">Todo List</h1>
      {props.todos.length === 0 ? (
        <>
          <h3 className="alert alert-info text-center">
            "No Todos To Display"
          </h3>
        </>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
