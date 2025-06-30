"use client";
import { Button } from "@/components/assignment-5/Button";

const ButtonPage = () => {
  const clickHandlers = {
    click: () => {
      console.log("Button is clicked");
    },
    change: () => {
      console.log("changed");
    },
  };
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q12 Create a reusable Button component that accepts props to apply different
        styles such as primary, secondary, and danger, along with click
        handlers. Demonstrate how to use this Button component within a sample
        Next.js application.
      </p>
      <h1>Reusable Button</h1>
      <Button
        primary={false}
        secondary={true}
        danger={false}
        clickHandlers={clickHandlers}
      />
    </div>
  );
}

export default ButtonPage;