import { TaskList } from "@/component/TaskList";
import './page.module.css'

const Tasks = () => {
    const list = [
    "Attending react session",
    "Comleting assignment",
    "Raise Pull Request",
    "Get your PR reviewed",
  ];
  return (
    <>
      <p>
        Q5. Create a functional component named TaskList that accepts an array
        of task names as a prop. Use the map function to render each task name
        as a list item. Import and render the TaskList component in the App
        component with an array of tasks.
      </p>

      <TaskList tasks={list} />
    </>
  );
};

export default Tasks;