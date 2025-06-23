import EmployeeSalary from "@/components/assignment-2/EmployeeSalary";
import Parent from "@/components/assignment-2/Parent";
import StudentList from "@/components/assignment-2/StudentList";
import TaskList from "@/components/assignment-2/TaskList";

const Employee = () => {
  return (
    <>
      <p className="question">
        Q15. Create a functional component named StudentList that displays a
        list of student names.. Define an array of student names as a constant
        within the component. Use the useMemo hook to memoize the list of
        student names. Render the list of student names on the screen. Include a
        button that, when clicked, appends a new student name to the list.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        
      </div>
    </>
  );
};

export default Employee;
