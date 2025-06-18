import { Counter } from "@/component/Counter";
import './page.module.css'

const IncrementDecrement = () => {
  return (
    <>
      <p>
          Q4. Create a functional component named Counter that displays a count
          and two buttons: "Increment" and "Decrement". Implement event handlers
          for the "Increment" and "Decrement" buttons to increase and decrease
          the count. Display the updated count on the screen.
        </p>
        <div>
          <Counter />
        </div>
    </>
  );
};

export default IncrementDecrement 