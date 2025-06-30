"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const withDataFetching = (Component) => (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Component {...props} data={data} />;
};

export default withDataFetching;
