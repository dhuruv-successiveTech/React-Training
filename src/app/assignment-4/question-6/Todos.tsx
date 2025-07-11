"use client";
import { useState } from "react";

interface TodoInterface {
  id:number;
  task:string
}

const Todos = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [task, setTask] = useState("");

  const AddTask = () => {
    const newTodo = {
      id: Date.now(),
      task: task,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <>
      <label htmlFor="">
        {" "}
        Enter tasks :{" "}
        <input type="text" onChange={(e) => setTask(e.target.value)} />{" "}
        <button onClick={AddTask}>Add Task</button>
        <br />
        <ul>
          {todos &&
            todos?.map((todo, index) => <li key={index}>{todo.task}</li>)}
        </ul>
      </label>
    </>
  );
};

export default Todos;
