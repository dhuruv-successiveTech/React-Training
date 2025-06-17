export const TaskList = ({ ...rest }) => {
  return (
    <div className="taskList">
      <p>TaskList : </p>
      <ol className="list" style={{  lineHeight: '1.5' }}>
        {rest.tasks.map((task, index) => (
          <li key={index} className="">
            {task}
          </li>
        ))}
      </ol>
    </div>
  );
};
