"use client";

import { useEffect } from "react";

const withLogger = (Component) => (props) => {
  useEffect(() => {
    console.log("Component mounted");

    return () => console.log("Component unmounted");
  }, []);
  
  useEffect(() => {
    console.log("updated");
  }, [props]);

  return <Component {...props} />;
};

export default withLogger;
