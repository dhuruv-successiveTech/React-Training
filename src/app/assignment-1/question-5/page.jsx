import { TaskList } from "@/components/assignment-1";

const Tasks = () => {
  const list = [
    "Attending react session",
    "Completing assignment",
    "Raise Pull Request",
    "Get your PR reviewed",
  ];
  return (
    <>
      <p className="question">
        Q5. Create a functional component named TaskList that accepts an array
        of task names as a prop. Use the map function to render each task name
        as a list item. Import and render the TaskList component in the App
        component with an array of tasks.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <TaskList tasks={list} />
      </div>
    </>
  );
};

export default Tasks;
