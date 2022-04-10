import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Todos } from "./components/Todos";
import { About } from "./components/About";
import { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (name, desc) => {
    console.log("Adding Todo", name, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      Name: name,
      Desc: desc,
    };
    setTodos([...todos, myTodo]);

    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onDelete = (todo) => {
    console.log("Deleting this ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("Deleted: ", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Anil - Todo List" searchStatus={true} />

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo AddTodo={addTodo} />{" "}
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
