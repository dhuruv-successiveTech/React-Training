export const TaskList = ({ ...rest }) => {
  return (
    <div style={{ fontSize: '18px', color: '#000'}}>
      <p>TaskList : </p>
      <ol className="list" style={{ lineHeight: "1.5" }}>
        {rest.tasks.map((task, index) => (
          <li key={index} className="">
            {task}
          </li>
        ))}
      </ol>
    </div>
  );
};
