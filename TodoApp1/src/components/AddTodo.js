import React, { useState } from "react";

export const AddTodo = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name cannot be blanck");
    } else if (!desc) {
      alert("Description cannot be blanck");
    } else {
      props.AddTodo(name, desc);
      setName("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <h3 className="alert-primary text-center">Add Todos</h3>
          <label className="form-label">Todo Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Todo Description</label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
