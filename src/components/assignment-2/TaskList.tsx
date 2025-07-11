"use client";
import { useState, useCallback } from "react";

const TaskList = () => {
  // Initial list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1 ", completed: false },
    { id: 2, text: "Task 2 ", completed: false },
    { id: 3, text: "Task 3 ", completed: false },
  ]);

  const handleComplete = useCallback((taskId:number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.completed ? `${task.text} completed ` : task.text}
            </span>
            {!task.completed && (
              <button onClick={() => handleComplete(task.id)}>Complete </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
