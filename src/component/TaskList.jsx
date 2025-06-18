const TaskList = ({ ...rest }) => {
  return (
    <div style={{ fontSize: '17px', color: '#000', display:"flex", flexDirection:"column", gap:'3px' }}>
      <p>TaskList : </p>
      <ol className="list" style={{ lineHeight: "2" }}>
        {rest.tasks.map((task, index) => (
          <li key={index} className="">
            {task}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;