import { TaskList } from "@/components/assignment-2";

const Tasks = () => {
  return (
    <>
      <p className="question">
        Q14. create a component that displays a list of tasks. Each task has a
        &quot;Complete&quot; button. Implement a feature where clicking the &quot;Complete&quot;
        button marks the task as completed. Use the useCallback hook to create
        dynamic callback functions for each task. Ensure that clicking the
        &quot;Complete&quot; button for one task doesn&apos;t trigger unnecessary re-renders
        for other tasks.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <TaskList />
      </div>
    </>
  );
};

export default Tasks;
