import { Button } from "@/component/Button";

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
        <Button text={"This is red"} color={"red"} />
        <Button text={"This is blue"} color={"blue"} />
        <Button text={"This is green"} color={"green"} />
        <Button text={"This is orange"} color={"DarkOrange"} />
      </div>
    </>
  );
};

export default StyleButton;
