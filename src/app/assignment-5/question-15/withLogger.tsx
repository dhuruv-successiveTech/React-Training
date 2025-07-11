import React, { useState } from "react";

// Define the generic type for the component props
function withLogger<P extends object>(Component: React.ComponentType<P>) {
  const WithLogger: React.FC<P> = (props: P) => {
    const [showLogger, setShowLogger] = useState(true);

    return (
      <div>
        <button onClick={() => setShowLogger((prev) => !prev)}>
          {showLogger ? "Unmount LoggerComponent" : "Mount LoggerComponent"}
        </button>

        {showLogger && <Component {...props} />}
      </div>
    );
  };

  return WithLogger;
}

export default withLogger;
