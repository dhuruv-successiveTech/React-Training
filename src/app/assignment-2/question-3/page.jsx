import ToDoList from "@/components/assignment-2/ToDoList";

const PersonDetails = () => {
  return (
    <>
      <p className="question">
        Q3. Create a functional component called ToDoList. Use the useState hook
        to manage a state variable named todos, initialized as an empty array.
        Render a list of todos using the map function. Each todo should have a
        checkbox to mark it as completed and a delete button to remove it from
        the list. Use the useState hook to manage the state of each todo item
        (completed or not).
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <ToDoList />
      </div>
    </>
  );
};

export default PersonDetails;
