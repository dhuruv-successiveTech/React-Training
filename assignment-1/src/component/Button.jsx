export const Button = ({ text, color }) => {
  const style = { backgroundColor: color, color: "white",text:'xl', padding:4, borderColor:"white",borderRadius:"4px"};
  return <button style={style}>{text}</button>;
};
