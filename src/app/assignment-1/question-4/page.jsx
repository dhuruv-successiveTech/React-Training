import { Counter } from "@/component/Counter";

const IncrementDecrement = () => {
  return (
    <>
      <p className="question">
        Q4. Create a functional component named Counter that displays a count
        and two buttons: "Increment" and "Decrement". Implement event handlers
        for the "Increment" and "Decrement" buttons to increase and decrease the
        count. Display the updated count on the screen.
      </p>
      <div style={{display:"flex", alignItems:'center', gap:"0.5rem", justifyContent:'center'}}>
        <Counter />
      </div>
    </>
  );
};

export default IncrementDecrement;
