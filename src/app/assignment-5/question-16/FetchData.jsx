"use client";

import withDataFetching from "./withDataFetching";

const FetchData = (props) => {
  const { data } = props;
    
  return (
    <>
      {data.map((item) => (
        <p key={item?.id}>UserName : {item?.name}</p>
      ))}
    </>
  );
};
export default withDataFetching(FetchData,"https://jsonplaceholder.typicode.com/users");
