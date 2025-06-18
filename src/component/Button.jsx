const Button = ({ text, color }) => {
  const style = {
    backgroundColor: color,
    color: "white",
    text: "xl",
    padding: 10,
    cursor:"pointer",
    border:'none',
    borderColor: "white",
    borderRadius: "10px",
  };
  return <button style={style}>{text}</button>;
};

export default Button;