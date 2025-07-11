"use client";

import React, { useEffect, useState, ComponentType } from "react";
import { handleSubmitAction } from "./actions";

// Define a generic type for the data
interface WithDataFetchingProps<T> {
  data: T[];
}

function withDataFetching<T>(Component: ComponentType<WithDataFetchingProps<T>>, url: string) {
  const WithDataFetching: React.FC<Omit<React.ComponentProps<typeof Component>, 'data'>> = (props) => {
    const [data, setData] = useState<T[]>([]);

    const getData = async () => {
      try {
        const response = await handleSubmitAction(url);
        setData(response); // Assuming response is of type T[]
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      getData();
    }, []); // Only run once, when the component mounts

    return <Component {...props as any} data={data} />;
  };

  return WithDataFetching;
}

export default withDataFetching;
