"use client";

const useLocalStorage = (key:string, value:string) => {
  const getValue = () => {
    if (typeof window === "undefined") {
      return value;
    }
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : value;
  };
  const setValue = (newValue:string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { getValue, setValue, remove };
};

export default useLocalStorage;
