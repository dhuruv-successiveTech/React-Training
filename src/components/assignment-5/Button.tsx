"use client";

import React from "react";

interface PropsInterface {
  buttonType: string;
  clickHandlers: { click: () => void };
}

export const Button = (props: PropsInterface) => {
  const { buttonType, clickHandlers } = props;

  return (
    <button
      onClick={clickHandlers.click}
      style={{
        background:
          buttonType == "Primary"
            ? "blue"
            : buttonType == "Secondary"
            ? "gray"
            : "red",
        color: "white",
      }}
    >
      {buttonType}
    </button>
  );
};
