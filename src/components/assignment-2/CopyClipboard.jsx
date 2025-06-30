"use client";

import React, { useState } from "react";
import useClipboard from "@/hooks/useClipboard";

const CopyClipboard = () => {
  const [text, setText] = useState("");
  const { copied, copy } = useClipboard();

  return (
    <div style={{ padding: 20 }}>
      <h2>Copy to Clipboard</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
        style={{ padding: 8, width: "300px", marginRight: 10 }}
      />

      <button onClick={() => copy(text)}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
};

export default CopyClipboard;
