"use client";

import useLocalStorage from "@/hooks/useLocalStorage";

const ManageLocalStorage = () => {
  const { getValue, setValue, remove } = useLocalStorage("AuthType", "Admin");

  const handleSet = () => setValue("Student");
  const handleRemove = () => remove();

  return (
    <div>
      <h2>Auth Type: {getValue()}</h2>
      <button onClick={handleSet}>Set AuthType</button>
      <button onClick={handleRemove}>Remove AuthType</button>
    </div>
  );
};
export default ManageLocalStorage;
