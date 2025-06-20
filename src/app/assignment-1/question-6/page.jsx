
import { Button } from "@/components/assignment-1";
import data from "./data";

const StyleButton = () => {
  return (
    <>
      <p className="question">
        Q6. Create a functional component named Button that accepts props for
        text and color. Style the button using inline styles or CSS classes
        based on the color prop. Import and render the Button component in the
        App component with different text and color props.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Button key={index} text={item.text} color={item.color} />
        ))}
      </div>
    </>
  );
};

export default StyleButton;
