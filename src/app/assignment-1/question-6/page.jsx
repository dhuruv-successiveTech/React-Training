import { Button } from "@/component/Button";
import './page.module.css'

const StyleButton = () => {
  return (
    <>
      <p>
        Q6. Create a functional component named Button that accepts props for
        text and color. Style the button using inline styles or CSS classes
        based on the color prop. Import and render the Button component in the
        App component with different text and color props.
      </p>
      <Button text={"This is red"} color={"red"} />
    </>
  );
};

export default StyleButton