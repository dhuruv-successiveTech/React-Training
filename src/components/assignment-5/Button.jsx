"use client";

import React from "react";

export const Button = React.memo((props) => {
  const { primary, secondary, danger, clickHandlers } = props;
  return primary ? (
    <button onClick={clickHandlers.click} style={{background:"blue", color:"white"}}>Primary</button>
  ) : secondary ? (
    <button onClick={clickHandlers.change}  style={{background:"gray", color:"black"}}>Secondary</button>
  ) : (
    <button onClick={clickHandlers.click}  style={{background:"red", color:"white"}}>Danger</button>
  );
});
